import React from 'react';
import database from "@react-native-firebase/database"
import { StyleSheet, Text,View,Button,BackHandler, Alert} from 'react-native';

function DHome(props){
    
    React.useEffect(()=>{

        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want logout?", [
              {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
              },
              { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
          };
      
          const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
          );
      
          return () => backHandler.remove();





    },[])
    const savedata = () => {
    
        // let user ={
        //     email:"usman123",
        //     password:"12366"
    
        //     // we store data in user
        // }
        // console.log("user===>",user)
        // database().ref('/').child('blood').push(user)
    
        // check data is save or not
        // bhot fast data base hai form web se



        // TO delete The Account:
       
        var res = props.route.params.email.value.replace(".","");
       database().ref('/').child('blood/Donors/'+res).remove()
        console.log(props.route.params.email.value)
       props.navigation.navigate('Login')
        
    }


    return(
        <View style={styles.container}>
            <Text style={{fontSize:32}}>Welcome</Text>
            <Text style={{fontSize:32}}>{props.route.params.name.names}</Text>
            <Text style={{fontSize:32}}></Text>
            <Button title="Delete My Account" onPress={savedata}/>


           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },

})
export default DHome;