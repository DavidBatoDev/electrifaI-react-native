import firestore from '@react-native-firebase/firestore';
import { getUserCredential } from './authService';

export const fetchUserProfile = async () => {
  const userCredential = getUserCredential();
  if (!userCredential) {
    return "Error has occurred."
  }
  try {
    const userProfileDocument = await firestore()
      .collection('users')
      .doc(userCredential.uid)
      .get();
    const userProfileData = userProfileDocument.data();
    console.log("TEST", userProfileData);
    return userProfileData;
  }
  catch {
    console.log("Error while fetching profile");
    return "Error while fetching profile";
  }
};