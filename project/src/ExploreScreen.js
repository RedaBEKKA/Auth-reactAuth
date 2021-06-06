import React,{useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const ExploreScreen = () => {
  const [isSwitch,setSwitch] = useState();
    return (
      <View style={styles.container}>
        <Text>Impression</Text>
        <Switch
          value={true}
          onValueChange={(value) => setSwitch(value)}
          trackColor={{true:'red'}}
         />
        
      </View>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    paddingTop:50
    
  },
});
