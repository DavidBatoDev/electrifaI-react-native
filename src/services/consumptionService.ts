import firestore from '@react-native-firebase/firestore';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { getUserCredential } from './authService';
import { successResponse, errorResponse } from '../utils/responseUtils';

type getTotalConsumptionProps = {
  userID: string,
  dateLowerBound: Date,
  dateUpperBound: Date,
};

export const getTotalConsumption = async ({
  userID,
  dateLowerBound,
  dateUpperBound,
}: getTotalConsumptionProps) => {
  try {
    const consumptionCollection = firestore().collection('consumptions');
    const consumptionQuery = await consumptionCollection
    .where('userID', '==', userID)
    .where('recordedAt', '>=', dateLowerBound)
    .where('recordedAt', '<=', dateUpperBound)
    .get();

    let totalConsumption = 0;
    let mostRecentReading = dateLowerBound;
    consumptionQuery.forEach(doc => {
      const data = doc.data();
      totalConsumption += data.kilowattHour;
      const recordedAt = data.recordedAt.toDate();
      mostRecentReading = mostRecentReading > recordedAt
        ? mostRecentReading
        : recordedAt;
    });
    
    const data = {
      mostRecentReading: mostRecentReading,
      totalConsumption: totalConsumption,
    };
    console.log(successResponse(data));
    return successResponse(data);
  }
  catch (error: any) {
    console.log(errorResponse(913, "Can't reach the database."));
    return errorResponse(913, "Can't reach the database.");
  }
};

export const getTotalConsumptionToday = async () => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  let userCredential = getUserCredential();
  if (!userCredential || !userCredential.uid) {
    return errorResponse(913, "Can't identify user.");
  }

  let params = {
    userID: String(userCredential.uid),
    dateLowerBound: startOfDay,
    dateUpperBound: endOfDay,
  }
  // NOTE: Query for testing dummy data, delete this
  params = {
    userID: String(userCredential.uid),
    dateLowerBound: new Date('2024-11-10T16:00:00.000Z'),
    dateUpperBound: new Date('2024-11-11T15:59:59.999Z'),
  }
  // END OF TESTING DUMMY DATA
  console.log(params);
  const response = await getTotalConsumption(params);
  return response;
};

export const getTotalConsumptionThisMonth = async () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const startOfMonth = new Date(currentYear, currentMonth, 1);
  const endOfMonth = new Date(currentYear, currentMonth+1, 0, 23, 59, 59, 999);

  let userCredential = getUserCredential();
  if (!userCredential) {
    return {data: null, error: "Error has occurred."};
  }
  try {
    // Query for actual data, do NOT delete this
    const consumptionCollection = firestore().collection('consumptions');
    const ConsumptionThisMonthQuery = await consumptionCollection
      .where('userID', '==', userCredential.uid)
      .where('recordedAt', '>=', startOfMonth)
      .where('recordedAt', '<=', endOfMonth)
      .get();
  
    let totalConsumption = 0;
    let mostRecentReading = startOfMonth;
    ConsumptionThisMonthQuery.forEach(doc => {
      const data = doc.data();
      totalConsumption+= data.kilowattHour;
      const recordedAt = data.recordedAt.toDate();
      mostRecentReading = mostRecentReading > recordedAt
        ? mostRecentReading
        : recordedAt;
    });
    const data = {
      mostRecentReading: mostRecentReading,
      totalConsumption: totalConsumption,
    };
    // console.log(data);
    return {data: data, error: ''};
  }
  catch {
    return {data: null, error: "Error has occurred."};
  }
};

export const getTotalConsumptionThisYear = async () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const startOfYear = new Date(currentYear, 0, 1);
  const endOfYear = new Date(currentYear, 12, 0, 23, 59, 59, 999);
  console.log(startOfYear.toLocaleString(), endOfYear.toLocaleString());

  let userCredential = getUserCredential();
  if (!userCredential) {
    return {data: null, error: "Error has occurred."};
  }
  try {
    // Query for actual data, do NOT delete this
    const consumptionCollection = firestore().collection('consumptions');
    const ConsumptionThisYearQuery = await consumptionCollection
      .where('userID', '==', userCredential.uid)
      .where('recordedAt', '>=', startOfYear)
      .where('recordedAt', '<=', endOfYear)
      .get();
  
    let totalConsumption = 0;
    let mostRecentReading = startOfYear;
    ConsumptionThisYearQuery.forEach(doc => {
      const data = doc.data();
      totalConsumption+= data.kilowattHour;
      const recordedAt = data.recordedAt.toDate();
      mostRecentReading = mostRecentReading > recordedAt
        ? mostRecentReading
        : recordedAt;
    });
    const data = {
      mostRecentReading: mostRecentReading,
      totalConsumption: totalConsumption,
    };
    // console.log(data);
    return {data: data, error: ''};
  }
  catch {
    return {data: null, error: "Error has occurred."};
  }
};

// TODO: 
// refactor consumptions use one func and pass only conditionals for queries
// consumption for monthly bar graph in Home Screen 
// 

