import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";


export const isUserLoggedIn = () => {
    return !!auth().currentUser;
};

export const signOut = async (): Promise<string> => {
  try {
    await auth().signOut();
    return "";
  }
  catch (error: any) {
    return error.code;
  }
};

export const signUp = async (
  firstName: string, 
  lastName: string, 
  email: string,
  password: string, 
): Promise<string> => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    const fullName = `${firstName} ${lastName}`;
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

export const logIn = async (
  email: string,
  password: string,
): Promise<string> => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    console.log(user);
    return '';
  }
  catch (error: any) {
    const errorCode = error.code;
    console.log(errorCode);
    return errorCode;
  }
};

/* TODO:
- disable submit if there is still error
- spinners
- inform user account is created/ just logged in
- create data on firestore connected to auth uid
- login w other services (maybe phone, google, apple, fb)
- verify email first?
- forgot/reset password
*/