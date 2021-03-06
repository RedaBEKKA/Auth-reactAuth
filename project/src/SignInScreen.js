import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import {Button} from "native-base"
import SignUpScreen from "./SignUpScreen"
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext} from "../components/context"
import { useTheme } from 'react-native-paper';

// import { AuthContext } from '../components/context';

// import Users from '../model/users';

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        login: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
    const { signIn } = React.useContext(AuthContext)

    const [message,setMessage] = React.useState("");
    // const { colors } = useTheme();

    // const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                login: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                login: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const logini = async() => {
        if(data.login!='' && data.password != ""){
            //alert('Azul dina')
            await fetch('https://dev500.live-resto.fr/apiv2e/establishments/authenticate',{
                method:'POST',
                headers:{
                    'accept':'application/json',
                    'Content-type':'application/json'
                },
                body:JSON.stringify({
                    'login':data.login,
                    'password':data.password
                })
            }).then(res=>res.json())
            .then(resData=>{
                alert(resData.establishment.token)
                console.log(data.login,data.password,resData);
                setMessage(resData.establishment.token)
                
            })
        }
    }

    // const handleValidUser = (val) => {
    //     if( val.trim().length >= 4 ) {
    //         setData({
    //             ...data,
    //             isValidUser: true
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             isValidUser: false
    //         });
    //     }
    // }

    const loginHandle = (userName, password) => {

        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.login.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Bienvenue !</Text>
        </View>
        <Animatable.View 
        animation="fadeInUpBig"
        style={styles.footer}>
        <Text style={[styles.text_footer, {
                color: "#000"
            }]}>Pseudo</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#eee"
                    size={20}
                />
                <TextInput 
                    placeholder="Votre pseudo"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: "#000"
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                {data.check_textInputChange ?
                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Feather 
                            name="check-circle"
                            color="green"
                            size={20}
                        />
                    </Animatable.View>
                  :
                    null
                }
                    
                
               </View>
               <Text style={[styles.text_footer, {
                marginTop:35
            }]}>Mot de passe</Text>
               <View style={styles.action}>
                <Feather
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                
                <TextInput 
                    placeholder="Votre mot de passe"
                    secureTextEntry={data.secureTextEntry?true:false}
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: "#000"
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                    // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        <Feather 
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                    </TouchableOpacity>
                                   
               </View>
                <TouchableOpacity
                    onPress={logini}
                >
                    <View style={styles.button}>
                    
                        <Button full style={{backgroundColor:"#08d4c4"}}  onPress={()=>{signIn()}}>{/*signIn()*/}
                            <Text style={styles.textSign,{
                                        color:'#fff'
                                    }}>
                                Se connecter
                            </Text>
                        </Button>
                       
                   
                        
                </View>

                
                </TouchableOpacity>
              
        </Animatable.View>
            
            
      </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
