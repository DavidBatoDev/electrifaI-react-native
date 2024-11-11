import firestore from '@react-native-firebase/firestore';
import { getUserCredential } from './authService';

export const getTotalConsumptionToday = async () => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  let userCredential = getUserCredential();
  if (!userCredential) {
    return {data: null, error: "Error has occurred."};
  }
  try {
    const consumptionCollection = firestore().collection('consumptions');
    // // Query for testing dummy data, delete this
    const dailyConsumptionQuery = await consumptionCollection
      .where('userID', '==', 'WyL4DHk8VxdmMU3L0pxbrgZstjn2')
      .where('recordedAt', '>=', new Date('2024-11-10T16:00:00.000Z'))
      .where('recordedAt', '<=', new Date('2024-11-11T15:59:59.999Z'))
      .get();
      // // Query for actual data, do NOT delete this
      // const dailyConsumptionQuery = await consumptionCollection
      //   .where('userID', '==', userCredential.uid)
      //   .where('recordedAt', '>=', startOfDay)
      // .where('recordedAt', '<=', endOfDay)
      // .get();
    
    let totalConsumption = 0;
    let mostRecentReading = startOfDay;
    dailyConsumptionQuery.forEach(doc => {
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
    console.log(data);
    return {data: data, error: ''};
  }
  catch (error: any) {
    console.log(error.message);
    return {data: null, error: "Error has occurred."};
  }
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
    console.log(data);
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
    console.log(data);
    return {data: data, error: ''};
  }
  catch {
    return {data: null, error: "Error has occurred."};
  }
};