import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

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
    let error: string = await addDisplayName(user, fullName);
    error = await createAccount(user.uid, fullName);
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

// Add user account in Firestore, called on signUp, returns error code
export const createAccount = async (id: string, name: string) => {
  try {
    await firestore().collection('users').doc(id).set(
      {
        name: name,
        nickname: '',
        location: '',
        age: '',
        occupation: '',
        photoUrl: '',
      }
    )
    return '';
  }
  catch (error: any) {
    return error;
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
- login w other services (maybe phone, google, apple, fb)
- verify email first?
- forgot/reset password
*/
