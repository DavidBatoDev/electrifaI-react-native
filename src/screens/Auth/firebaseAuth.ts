import auth from "@react-native-firebase/auth";

export const signUp = async (
  email: string,
  password: string, 
  firstName: string, 
  lastName: string, 
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