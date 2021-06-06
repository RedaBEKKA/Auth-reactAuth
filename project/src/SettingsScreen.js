import React from 'react';
import { View, Text, ScrollView, StyleSheet,Image} from 'react-native';
import HTML from "react-native-render-html"
import { ListItem } from 'react-native-elements'
import { Button } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'native-base';


const SettingsScreen = (props) => {
  const htmlContent = `
    <h1>Les paramétres</h1>
    <h2 style="textAlign: center;">Comment souhaitez vous afficher les commandes ?</h2>      
`;
      const list = [
        {
          title: "Information sur l'entreprise",
          icon: 'chevron-right'
        },
        {
          title: 'Horraires exceptioenels',
          icon: 'chevron-right'
        },
        // {
        //   title: 'Impression',
        //   icon: 'chevron-right',
          
          
        // },
       
        
      ]

    return (
      <ScrollView style={styles.container}>
         <HTML source={{ html: htmlContent }} />
              <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                  <Image
                    source={require('../assets/cmd1.png')}
                    resizeMode="cover"
                    style={styles.cardImg}
                  />
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>Afficher toutes les commandes</Text>
                  
                  <Text style={styles.cardDetails}>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde.
                  </Text>
                        <Button style={{marginTop:8}} icon="play" color="#5dbca3" mode="contained" onPress={() => console.log('Pressed')}>
                          Commencer
                        </Button>
                </View>
              </View>
      

              <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                  <Image
                    source={require('../assets/cmd2.png')}
                   
                    style={styles.cardImg}
                  />
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>Afficher les commandes par statut</Text>
                  
                  <Text style={styles.cardDetails}>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde.
                  </Text>
                  <Button style={{marginTop:8}} icon="play" color="#5dbca3" mode="contained" onPress={() => console.log('Pressed')}>
                  Commencer
                </Button>
                </View>
              </View>

                <View style={{marginTop:50}}>
                {
                  list.map((item, i) => (
                    <ListItem key={i} bottomDivider >
                      <FontAwesome  name={item.icon} />
                      <ListItem.Content>
                        <ListItem.Title>{item.title}</ListItem.Title>
                      </ListItem.Content>
                      <ListItem.Chevron />
                    </ListItem>
                  ))

                }
                <ListItem  onPress={()=>{props.navigation.navigate('ExploreScreen')}} bottomDivider >
                  <Icon name="print" />
                  <Text>Impression</Text>
                </ListItem>
              </View>
        
      </ScrollView>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
   
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginTop:25,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
