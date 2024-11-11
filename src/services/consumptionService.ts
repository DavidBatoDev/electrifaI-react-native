import firestore from '@react-native-firebase/firestore';
import { getUserCredential } from './authService';

export const getAverageDailyConsumptions = async () => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  let userCredential = getUserCredential();
  if (!userCredential) {
    return {data: null, error: "Error has occurred."};
  }
  try {
    const consumptionCollection = firestore().collection('consumptions');
    // Query for testing dummy data, delete this
    const dailyConsumptionQuery = await consumptionCollection
      .where('userID', '==', 'WyL4DHk8VxdmMU3L0pxbrgZstjn2')
      .where('recordedAt', '>=', new Date('2024-11-10T16:00:00.000Z'))
      .get();
    // // Query for actual data, do NOT delete this
    // const dailyConsumptionQuery = await consumptionCollection
    //   .where('userID', '==', userCredential.uid)
    //   .where('recordedAt', '>=', startOfDay)
    //   .get();
    
    const userConsumptionSnapshot = dailyConsumptionQuery;
    let averageConsumptionToday = 0;
    userConsumptionSnapshot.forEach(doc => {
      const data = doc.data();
      averageConsumptionToday += data.kilowattHour;
    });
    const data = {
      date: startOfDay.toLocaleString(),
      averageConsumptionToday: averageConsumptionToday,
    }
    console.log(data);
    return data;
  }
  catch (error: any) {
    console.log(error.message);
    return {data: null, error: "Error has occurred."};
  }
};