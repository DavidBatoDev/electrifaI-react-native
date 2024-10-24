import auth from "@react-native-firebase/auth";

export const signUp = async (
  firstName: string, 
  lastName: string, 
  email: string,
  password: string, 
): Promise<void> => {
  
  auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log("SUCCESS?");
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("ERROR!");
      console.log(errorCode, errorMessage);
      // ..
    });
  }

/* TODO:
- disable submit if there is still error
- create data on firestore connected to auth uid
- login
- logout
- persist login
- login w other services (maybe phone, google, apple, fb)
- forgot/reset password
- 
*/