import firestore from '@react-native-firebase/firestore';

export const createDummyConsumptions = async () => {
  const randomKilowattHour = getRandomFloat(0.01, 0.9);
  const userID = 'WyL4DHk8VxdmMU3L0pxbrgZstjn2';
  const randomMonth = getRandomInt(1, 12);
  const randomDay = getRandomInt(1, 31);
  const recordedAt = new Date(`2024-${randomMonth}-${randomDay}`);

  for (let i: number = 0; i <=3; i++) {
    try {
      const dummyData = {
        kilowattHour: randomKilowattHour,
        userID: userID,
        recordedAt: firestore.Timestamp.fromDate(recordedAt),
      }
      await firestore().collection('consumptions').add(dummyData);
    }
    catch (error) {
      console.log(error);
    }
  };
}
  
const getRandomFloat = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  }

const getRandomInt = (min: number, max: number) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);};
