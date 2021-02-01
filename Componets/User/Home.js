import React from 'react';
import database from "@react-native-firebase/database"
import { StyleSheet, Text,View,Button,BackHandler, Alert} from 'react-native';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

function Home(props){

    const [donordata,setdonordata]=useState({});
    React.useEffect(()=>{

        database().ref('/').child('blood/Donors/').once('value',function(data){

            // console.log(data.val())
            // const mydata=data.val()
            setdonordata(data.val())
    
    
        })  
        
        
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to logout?", [
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


    return(
        <View >
            
<ScrollView>
{
     Object.values(donordata).map((objvalue,key) => {

        console.log(objvalue.names)

        return(
            <View key={key} style={{
                width:"97%",
                height:200,
                margin:5,
              
                backgroundColor:"white",
                borderRadius:10,
                borderStyle:"solid",
                
            }}>
                <Text style={{fontSize:23,padding:15,fontWeight:"bold"}}>
               Blood Group:{objvalue.blood}
                </Text>
                <Text style={{fontSize:18,paddingLeft:15}}>
               Name: {objvalue.names}
                </Text>
                <Text style={{fontSize:18,paddingLeft:15}}>
               Address: {objvalue.address}
                </Text>

                <Text style={{fontSize:18,paddingLeft:15}}>
               Phone No: {objvalue.phone}
                </Text>

                <Text style={{fontSize:18,paddingLeft:15}}>
               Email: {objvalue.value}
                </Text>
            </View>



        )

        
      })
}

</ScrollView>

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
export default Home;