import auth from "@react-native-firebase/auth";

export const signUp = async (
  firstName: string, 
  lastName: string, 
  email: string,
  password: string, 
): Promise<string> => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    console.log("SUCCESS?");
    console.log(user);
    return "";
  }
  catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("ERROR!");
    console.log(errorCode, errorMessage);
    return errorCode;
  }
}

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