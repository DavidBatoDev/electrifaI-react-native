import firestore from '@react-native-firebase/firestore';
import { getUserCredential } from './authService';
import { successResponse, errorResponse } from '../utils/responseUtils';

export const fetchUserProfile = async () => {
  const userCredential = getUserCredential();
  if (!userCredential) {
    return errorResponse(913, "Can't identify user.");
  }
  try {
    const userProfileSnapshot = await firestore()
      .collection('users')
      .doc(userCredential.uid)
      .get();
    const userProfileData = userProfileSnapshot.data();
    return successResponse(userProfileData);
  }
  catch {
    console.log('Error while fetching profile');
    return errorResponse(913, "Can't identify user.");
  }
};

// TODO: edit user profile
