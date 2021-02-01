// In App.js in a new project


// copy code form the website
import * as React from 'react';
// import { Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Componets/User/Home'

import Login from "../Componets/Login";
import Regestration from "../Componets/Donor/Regestration";
import Selects from "../Componets/preregestration";
import Dhome from "../Componets/Donor/home";
import User_Regestration from "../Componets/User/Regestration";
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
       <Stack.Navigator
      screenOptions={{
        headerStyle: {
          // backgroundColor: '#f4511e',
        
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          // fontWeight: 'bold',
        },
       
      }}
    >
        <Stack.Screen name="Login" component={Login}
       options={{
        headerShown: false
       }}
        />
        <Stack.Screen 
        options={{
          headerLeft:false
        }}
        
    //     options={{title:"Home",headerStyle:{
    //         headerTitle:"Home",
    //         //backgroundColor:"orange"
    //     },
    //     //headerTitle : props => <Image style={{height:100,width:50,resizeMode:'contain'}} source={{uri:"https://w7.pngwing.com/pngs/817/902/png-transparent-google-logo-google-doodle-google-search-google-company-text-logo-thumbnail.png"}} />
    
    // }
    //     } 
        
        
        name="Home" component={Home} />
<Stack.Screen name="Regestration" component={Regestration} 
        options={{
            headerShown: false,
            
           }}
        />

<Stack.Screen name="User_Regestration" component={User_Regestration} 
        options={{
            headerShown: false
           }}
        />
     
       
        <Stack.Screen name="Dhome" component={Dhome} 
        
        options={{
          headerTitle: "Home",
          headerLeft:false
         }}
        
        />

        <Stack.Screen name="Selects" component={Selects} 
        
        options={{
          headerShown: false
         }}
        
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;