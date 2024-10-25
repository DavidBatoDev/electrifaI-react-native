import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

export const signUp = async (
  firstName: string, 
  lastName: string, 
  email: string,
  password: string, 
): Promise<string> => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    const fullName = firstName + lastName;
    const error: string = await addDisplayName(user, fullName);
    console.log("SUCCESS?");
    console.log(user);
    return error;
  }
  catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("ERROR!");
    console.log(errorCode, errorMessage);
    return errorCode;
  }
};

const addDisplayName = async (
  user: FirebaseAuthTypes.User,
  fullName: string,
): Promise<string> => {
  try {
    await user.updateProfile({
      displayName: fullName,
      photoURL: null,
    });
    return "";
  }
  catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("ERROR!");
    console.log(errorCode, errorMessage);
    return errorCode;
  }
};

/* TODO:
- disable submit if there is still error
- spinners
- inform user account is created
- create data on firestore connected to auth uid
- login
- logout
- persist login
- login w other services (maybe phone, google, apple, fb)
- forgot/reset password
- 
*/