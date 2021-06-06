import React from "react"
import {View,StyleSheet} from "react-native"
import {
    DrawerContentScrollView,
    DrawerItem
}from "@react-navigation/drawer"
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
}from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from "../components/context"


export function DrawerContent(props){
  
    const paperTheme = useTheme();

    const {signOut,toggleTheme} = React.useContext(AuthContext)
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQGuEgvJ413ZNg/profile-displayphoto-shrink_800_800/0/1599644811136?e=1625702400&v=beta&t=NbRy7HBlwn3l59FRtZU292HnDvU4PtPcEjtMKGcBkhI'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Nom du resto</Title>
                                <Caption style={styles.caption}>Live Resto</Caption>
                            </View>
                        </View>
                        
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Acceuil"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="pending" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Commandes en cours"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="done-all" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Commandes terminé"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="watch-later" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Horraire d'ouvertures"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="calendar-today" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Fermetures exceptionelles"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Paramétres"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="help" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Aide"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preferences}>
                                <Text>Pret a recevoir les commandes</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                    <Text style={{padding:5,fontWeight:'bold'}}>
                        Besoin d'aide appellez nous sur 0782205066
                    </Text>
                    
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color,size})=>(
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}/>
                    )}
                    label="Se deconnecter"
                    onPress={()=>{signOut()}}
                 />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    preferences: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight:'600',
        paddingVertical: 12,
        paddingHorizontal: 16,
        color:'#fff',
        backgroundColor:'#087',
        
      },
  });
