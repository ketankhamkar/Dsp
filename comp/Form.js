

import React from 'react';
import  {View,Text,StyleSheet, TextInput, Button,state} from 'react-native';



class Form extends React.Component {


  
  state={
      name:'',
      password:''
    }
  
  submit()
  {
    console.warn("values",this.state)
  }
  render(){
    return(
      <View >
        
         <Text  style={styles.head}>Login</Text> 
        <TextInput style={styles.usb} placeholder='name' onChangeText={(text)=> {this.setState({name:text})}}></TextInput>
        <TextInput style={styles.usb}   secureTextEntry={true}  placeholder='password'  onChangeText={(text)=> {this.setState({password:text})}}></TextInput>
        <Button title='submit' onPress={()=>{this.submit()}}></Button>
        
        <Text>{this.state.name}</Text>
        <Text>{this.state.password}</Text>
      </View>
    )
  }
}
export default Form;
 const styles= StyleSheet.create({
   usb :{
     
    margin: 15,
    height: 40,
    borderColor: '#1a587a',
    borderWidth: 1

   },
   head :{
        fontSize:50,
        fontWeight:'bold',
        textAlign:'center',
        color:'gold'
   },
  

  
 })