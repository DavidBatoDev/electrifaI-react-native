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
    
    const userConsumptionSnapshot = dailyConsumptionQuery;
    let totalConsumptionToday = 0;
    let mostRecentReading = startOfDay;
    userConsumptionSnapshot.forEach(doc => {
      const data = doc.data();
      totalConsumptionToday += data.kilowattHour;
      const recordedAt = data.recordedAt.toDate();
      mostRecentReading = mostRecentReading > recordedAt
        ? mostRecentReading
        : recordedAt;
    });
    const data = {
      mostRecentReading: mostRecentReading,
      totalConsumptionToday: totalConsumptionToday,
    };
    console.log(data);
    return {data: data, error: ''};
  }
  catch (error: any) {
    console.log(error.message);
    return {data: null, error: "Error has occurred."};
  }
};