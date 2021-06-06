import React,{useState} from 'react'
import { TouchableWithoutFeedback } from 'react-native';
import { View, Text, SafeAreaView,StyleSheet,Animated,FlatList,Image,TouchableOpacity,Dimensions, Button } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";



const HomeScreen=()=> {
 return(
 
  <SafeAreaView>

  </SafeAreaView>
             
   
  )
}

export default HomeScreen;


const styles = StyleSheet.create({
  container:{
    flex : 1,
    paddingHorizontal:10,
    
    
  },
 
  listTab:{
    
    
    alignSelf:'flex-start',
    flexDirection:'row',

  },
  btnTab:{
   // width:Dimensions.get('window').width/3.5,
   width:110,
   backgroundColor:"#EEE",
    flexDirection:'row',
    borderWidth:0.5,
    borderColor:'#ebebea',
    padding:10,
    justifyContent:'center'
  },
  textTab:{
    fontSize:13
  },
  btnTabActive:{
    backgroundColor:'#e68340'
  },
  itemContainer:{
    flexDirection:'row',
    paddingVertical:15
  },
  itemLogo:{
    padding:10
  },
  itemImage:{
    width:50,
    height:50
  },
  itemBody:{
    flex:1,
    paddingHorizontal:10,
    justifyContent:'center'
  },
  itemName:{
    fontWeight:'bold',
    fontSize:16
  },
  itemBody:{
    
    paddingHorizontal:20,
    justifyContent:'center'
  },
  itemName:{
    fontWeight:'bold',
    fontSize:13,
    color:'#333'
  },
  itemStatus:{
    backgroundColor:'purple',
    paddingHorizontal:6,
    justifyContent:'center',
    right:12
  }
})