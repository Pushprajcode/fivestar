
import {GoogleSignin,GoogleSigninButton} from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
    webClientId: '260712318904-pkpfqn4nqs4fp38dbib5prb47lkd6b1g.apps.googleusercontent.com',
  });

async function onGoogleButtonPress() {
   
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }
  export default onGoogleButtonPress;