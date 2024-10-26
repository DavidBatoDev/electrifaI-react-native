import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

// Checks if a user is signed in at the moment
export const isUserLoggedIn = () => {
  return !!auth().currentUser;
};

// Sign outs the user, returns error code
export const signOut = async (): Promise<string> => {
  try {
    await auth().signOut();
    return '';
  }
  catch (error: any) {
    return error.code;
  }
};

// Create an account, returns error code
export const signUp = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
): Promise<string> => {
  try {
    const userCredential = await auth().
      createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    const fullName = `${firstName} ${lastName}`;
    const error: string = await addDisplayName(user, fullName);
    return error;
  }
  catch (error: any) {
    const errorCode = error.code;
    return errorCode;
  }
};

// Add displayName upon creating account, called on signUp, returns error code
const addDisplayName = async (
  user: FirebaseAuthTypes.User,
  fullName: string,
): Promise<string> => {
  try {
    await user.updateProfile({
      displayName: fullName,
      photoURL: null,
    });
    return '';
  }
  catch (error: any) {
    const errorCode = error.code;
    return errorCode;
  }
};

// Log in, return error code
export const logIn = async (
  email: string,
  password: string,
): Promise<string> => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    return '';
  }
  catch (error: any) {
    const errorCode = error.code;
    return errorCode;
  }
};

/* Auth TODO:
- disable submit if there is still error
- spinners
- inform user account is created/ just logged in
- create data on firestore connected to auth uid
- login w other services (maybe phone, google, apple, fb)
- verify email first?
- forgot/reset password
*/
