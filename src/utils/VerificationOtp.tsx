import axios from 'axios';
import React from 'react';
import{
    View,
    Text
} from 'react-native'
const VerificationOtp=()=>{
    return(
    axios({
        method:'post',
        url:'http://fivestardevapi.appskeeper.in/api/v1/user/verify-only-otp',
        data:{
            
                userId:'62a0d37b9ef3a6e0a7d4583d',
                otp: "12345678",
                countryCode: '+1',
                phoneNo: "12322"
        }
      })
      .then(response=>{
        console.log('response',response);
        
      })
      .catch(err=>{
        console.log('error',err);
        
      })
    )


}
export default VerificationOtp;