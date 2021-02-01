/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Toast from 'react-native-simple-toast';
import React from 'react';
import database from "@react-native-firebase/database"
import { ScrollView } from 'react-native-gesture-handler';

import {
  
  View,
  Text,
 
  Button,
  Image
,
} from 'react-native';


import { TextInput } from 'react-native';
function Login( props) {

  const [value, onChangeText] = React.useState();

  const [Pass, onChangepass] = React.useState();
  const [names, onChangename] = React.useState();

  const [blood, onChangeblood] = React.useState();
  const [phone, onChangephone] = React.useState();

  const [address, onChangeadderss] = React.useState();


const submit=()=>{

  if(value.length<1 || Pass.length <1 || names.length <1 || blood.length<1 || phone.length<1 || address.length<1){

    Toast.show('Please Fill all the fileds');
  }





















  
 else{

  database().ref('/').child('blood/Donors/').once('value',function(data){

    var checkemail=true;
 
     // console.log(data.val())
     const mydata=data.val()
     
     Object.values(mydata).forEach((objvalue) => {
       
       console.log(objvalue)
 
       if(objvalue.value===value  ){
 
        
         Toast.show('Email is Already Regested');
         checkemail=false
         return true
       }
      
 
       
     })
 
 if(checkemail){
 
   database().ref('/').child('blood/User/').once('value',function(data){
 
     var emailinuser=true
     // console.log(data.val())
     const mydata=data.val()
   
     Object.values(mydata).forEach((objvalue) => {
   
       // console.log(objvalue)
   
       if(objvalue.value===value  ){
         
         Toast.show('Email is Already Regested');
         emailinuser=false
         
         return true
       }
   
     
       
     })
 
 if(emailinuser){
 
 
 
  let user={
    value,
    Pass,
    names,
    blood,
    phone,
    address
   }


   var res = value.replace(".", "");
   database().ref('/').child('blood/Donors/'+res).set(user)
 
   
 
   props.navigation.navigate('Dhome',{name:{names},email:{value}})
    
 
 }
     
   
   
   })   
 
 
 
 
 }
 
 
 
 })  

















 }



 
  
}




  return (
   
    <>
      
     
    
         <View style={{alignItems:"center",width:"100%", height:"100%" ,backgroundColor: '#fff',}}>
           <View  style={{alignItems:"center",height:290}} >



           <Image
          source={{
            uri: 'https://pngimage.net/wp-content/uploads/2018/06/water-png-icon-2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
          <Text >
            Blood Donator
          </Text>
          <Text style={{fontWeight:"bold"}}>
           REGESTRATION
          </Text>

           </View>



         <ScrollView>
        <View style={{ width:"100%"}}>
       
        <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:320,padding:10,marginTop:10 }}
      onChangeText={text => onChangename(text)}
      value={names}
      placeholder="Name"
    />

    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginTop:10  }}
      onChangeText={text => onChangeadderss(text)}
      value={address}
      placeholder="Address"
    />
    
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding:10,marginTop:10 }}
      onChangeText={text => onChangephone(text)}
      value={phone}
      
      placeholder="Phone No"
      
      keyboardType="phone-pad"
      
     
    />
    
<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding:10,marginTop:10 }}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder="Email"
      
    />

<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginTop:10   }}
      onChangeText={text => onChangepass(text)}
      value={Pass}
      placeholder="Password"
      secureTextEntry
    />

    
<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginTop:10  }}
      onChangeText={text => onChangeblood(text)}
      value={blood}
      placeholder="Blood Group e.g A,B"
    />
    
    <Text></Text>
    <Button
          title="Sign Up"
         

          onPress={submit}
        />
        <Text style={{textAlign:"center"}}
        
        onPress={() => props.navigation.navigate('Login')}
        >
          Sign In ?
        </Text>
        
          </View>
          </ScrollView>



          
         </View>
        
    </>
  );
};



export default Login;


