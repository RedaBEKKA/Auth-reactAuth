import React from 'react';
import { View, Text, StyleSheet, ScrollView,Image } from 'react-native';
import { ListItem } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swiper from "react-native-swiper"
const SupportScreen = () => {
  const list = [
    {
      title: 'Retarder la commande',
      icon: 'calendar-times-o'
    },
    {
      title: 'Ajustement du prix',
      icon: 'eur'
    },
    {
      title: 'Contacter le client',
      icon: 'user'
    },
    {
      title: 'Annuler la commande',
      icon: 'angle-right'
    },
    
  ]
    return (
      <ScrollView>
             <View style={styles.sliderContainer}>
            <Swiper autoplay horizental={false} height={200} activeDotColor="#5dbca3" >
              <View style={styles.slide}>
                <Image 
                  source={require('../assets/banners/food-banner1.jpg')}
                  resizeMode='cover'
                  style={styles.sliderImage}
                />                
                  
              </View>
              <View style={styles.slide}> 
                  <Image 
                      source={require('../assets/banners/food-banner2.jpg')}
                      resizeMode='cover'
                      style={styles.sliderImage}
                    />
              </View>
              <View style={styles.slide}> 
                  <Image 
                      source={require('../assets/banners/food-banner3.jpg')}
                      resizeMode='cover'
                      style={styles.sliderImage}
                    />
              </View>

            </Swiper>


            </View>
             <View>
              {
                list.map((item, i) => (
                  <ListItem key={i} bottomDivider>
                    <FontAwesome name={item.icon} />
                    <ListItem.Content>
                      <ListItem.Title>{item.title}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem>
                ))
              }
            </View>
      </ScrollView>
     
    );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  head: { height: 40, backgroundColor: '#f1f8ff' },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
});
