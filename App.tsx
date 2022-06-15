import React from "react";
import{
  View,
  StyleSheet

} from 'react-native'
import {Provider} from 'react-redux';
import Navigation from "./src/redux/Router/Navigation";
import { store } from "./src/redux/reducer/store";



const App: React.FC = () =>{
  return (
    
    <Provider store={store}>
    <Navigation/> 
     
    </Provider>
    
   

  )
}
export default App;

const styles = StyleSheet.create({
  
})