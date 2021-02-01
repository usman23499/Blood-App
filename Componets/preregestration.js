import React from 'react';

import {Text,View,Button,Image} from 'react-native';

function Selects(props){


    return(
        <View style={{display:"flex",alignItems:"center",flex:1,width:"100%",  backgroundColor: '#fff',}}>
        <View  style={{display:"flex",alignItems:"center",flex:4,}} >
        
        
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
           SELECTION
          </Text>


        </View>
        
        <View style={{ flex:5,width:"100%"}}>


            
            <Button title="Donor" onPress={() => props.navigation.navigate('Regestration')}/>

        
<Text></Text>
            <Button title="User" onPress={() => props.navigation.navigate('User_Regestration')} />

     
            

            </View>
        </View>
    )
}


export default Selects;



