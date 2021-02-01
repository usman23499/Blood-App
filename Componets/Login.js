/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';
import database from "@react-native-firebase/database"
import React from 'react';
import {
  
  View,
  Text,
 
  Button,
  Image
,
} from 'react-native';


import { TextInput } from 'react-native';
function Login( props) {

  const [value, onChangeText] = React.useState('');

  const [Pass, onChangepass] = React.useState('');

  

  
 const login=()=>{
 
   if(value.length<1 || Pass.length<1){

    Toast.show('Please Fill all the fileds');
    return false;
   }
   
  database().ref('/').child('blood/Donors/').once('value',function(data){

            var checkemail=true
            // console.log(data.val())
            const mydata=data.val()
           
            Object.values(mydata).forEach((objvalue) => {
           
              console.log(objvalue)

              if(objvalue.value===value && objvalue.Pass === Pass ){

               
                
                props.navigation.navigate('Dhome',{name:{names:objvalue.names},email:{value}})
               
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
            
                  if(objvalue.value===value && objvalue.Pass === Pass ){
                    
                    props.navigation.navigate('Home',{name:{names:objvalue.names},email:{value}})
                    emailinuser=false
                    return true
                  }
            
                  
                })
            
                if(emailinuser){
                  Toast.show('Invalid Login');
                }
            })   
            }








        })   




 } 
  return (
   
    <>
      
     
    
         <View style={{alignItems:"center",height:"100%",width:"100%",  backgroundColor: '#fff',}}>

        

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


           </View>
          <ScrollView>
        <View style={{ width:"100%"}}>
       
        <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,width:320,padding:10,marginTop:10 }}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder="Email"
    />


<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 ,padding:10,marginTop:10 }}
      onChangeText={text => onChangepass(text)}
      value={Pass}
      placeholder="Password"
      secureTextEntry
    />
    <Text></Text>
    <Button
          title="Log In "
         

          onPress={login}
        />
        <Text style={{textAlign:"center"}}
         onPress={() => props.navigation.navigate('Selects')}
        >
          Sign Up ?
        </Text>
        
          </View>
          </ScrollView>

          
         </View>
        
    </>
  );
};



export default Login;


