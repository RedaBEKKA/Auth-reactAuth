
import {ActivityIndicator,View} from "react-native"

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from "./src/MainTabScreen"
import {DrawerContent} from "./src/DrawerContent"
import SupportScreen from "./src/SupportScreen"
import SettingsScreen from "./src/SettingsScreen"
import BookmarkScreen from "./src/BookmarkScreen"
import RootStackScreen from "./src/RootStackScreen"
import { AuthContext } from "./components/context";

const Drawer = createDrawerNavigator()
//7708be4e-5fd2-447b-8fe6-3846b76bbd24
const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null); 
  React.useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false)
    },1000)
   }, []) 
  
  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      setUserToken('fgkj');
      setIsLoading(false);
      // const userToken = String(foundUser[0].userToken);
      // const userName = foundUser[0].username;
      
      // try {
      //   await AsyncStorage.setItem('userToken', userToken);
      // } catch(e) {
      //   console.log(e);
      // }
      // // console.log('user token: ', userToken);
      // dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      setUserToken(null);
      setIsLoading(false);
    //   try {
    //     await AsyncStorage.removeItem('userToken');
    //   } catch(e) {
    //     console.log(e);
    //   }
    //   dispatch({ type: 'LOGOUT' });
     },
    signUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
    // toggleTheme: () => {
    //   setIsDarkTheme( isDarkTheme => !isDarkTheme );
    // }
  }), []);

  if(isLoading){
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
        <ActivityIndicator size="large" color="#000"/>
      </View>
    )
  }
  

 
  
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
    
      {userToken !== null ?(
        <Drawer.Navigator drawerContent={props=><DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
      </Drawer.Navigator>)
      :
      <RootStackScreen/>
      }
     
    </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;