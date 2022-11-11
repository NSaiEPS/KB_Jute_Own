import { Alert, BackHandler, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Button, Input } from 'react-native-elements'
import EmailIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import LockIcon from 'react-native-vector-icons/MaterialIcons';
import LockIcon from 'react-native-vector-icons/Fontisto';
import { Picker } from '@react-native-picker/picker';
import { Constants } from  '../helpers/Constants';
import { commonStyles } from '../themes/commonStyles';
import Pickers from '../common/Pickers';
// import { AppSafeAreaView } from '../common';

const LoginScreen = ({navigation}) => { 

    useLayoutEffect(()=>{
        navigation.setOptions({headerShown: false})
      },[])
      
      const backActionHandler = () => {
        
            BackHandler.exitApp() 
        
        return true;
      };
    
      useEffect(() => {
    
        // Add event listener for hardware back button press on Android
        BackHandler.addEventListener("hardwareBackPress", backActionHandler);
        // BackHandler.exitApp()
    }, []);

    const [input, setInput] = useState({
        email:'',
        password:'',
        passwordShow:false,
    })
    
    const [pickerVal, setPickerval] = useState('')
    function ValidateEmail(mail) {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    // alert("You have entered an invalid email address!")
    // return (false)
}

    let handleLogin=()=>{
        if(ValidateEmail(input.email) && input.password.length >=7 && pickerVal && pickerVal!=='Select Company'){
            navigation.replace('Home')
        }
        else {
            if(ValidateEmail(input.email) && input.password && !pickerVal || pickerVal==='Select Company'){ 
                alert("Please select the company")
            }
            if(input.email && input.password && pickerVal && pickerVal!=='Select Company' && input.password.length <7){
                alert("Password must be greater than 7 characters")
            }
            if(ValidateEmail(input.email) && !input.password){
                alert("Please enter the password")
            }

            if(!ValidateEmail(input.email) ){
                alert("please enter an valid email address")
            }
           
          
           
        }
    }
  return (
    // <AppSafeAreaView statusColor>
    <SafeAreaView style={styles.loginScreenFull }>
    <View style={styles.loginScreen}>
     <View >
        <Image 
        style={[styles.loginScreenLogo,{
            resizeMode: 'contain'
            
            
        }]}
        
        source={{
            uri:"https://static.wixstatic.com/media/3081c3_fd6399a58cf845159546edee129e2688~mv2.png/v1/fill/w_168,h_267,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/KB%20LOGO_2021.png"
        }}
        />

     </View>
     <View style={[styles.loginScreenBody,{
        ...commonStyles.boxShadow
     }]}>
       
        <View style={styles.loginScreenBodyTop}>
            <Text style={styles.loginScreenBodyTopText}>LOGIN</Text>
        </View>
        <View style={styles.loginScreenBodyInputPart}>

           
           <View style={styles.loginScreenBodyInputPartInside}>
        <Input
        value={input.email}
        onChangeText={(text)=>{
            setInput({
                ...input,
                email:text
            })
        }}
  placeholder='Email'
  leftIcon={
   
    <EmailIcon
      name='email'
      size={24}
      color='black'
    />
  }
  style={styles.loginScreenInput}
  leftIconContainerStyle={{marginLeft:15}}
/>
</View>

<View style={styles.loginScreenBodyInputPartInside}>

<Input
 value={input.password}
 onChangeText={(text)=>{
     setInput({
         ...input,
         password:text
     })
 }}
  placeholder='Password'
  secureTextEntry={input.passwordShow ? false :true}
  leftIcon={
   input.passwordShow?
    <LockIcon
    onPress={()=>{
        setInput({
            ...input,
            passwordShow:false
        })
    } }
    name='unlocked'
    size={24}
    color='black'
  />:
    <LockIcon
    onPress={()=>{
        setInput({
            ...input,
            passwordShow:true
        })
    } }
      name='locked'
      size={24}
      color='black'
    />
  }
  leftIconContainerStyle={{marginLeft:15}}
  style={styles.loginScreenInput}
/>
</View>


<Pickers 
data={Constants.LoginSelectCompany}
setPickerval={setPickerval}
pickerVal={pickerVal}
extrastyles={{borderWidth:1, borderRadius:0}}
/>

                  <Button 
                  onPress={handleLogin}
                  title='Submit'
                  containerStyle={{
                    width:150,
                    marginLeft:10,
                    marginTop:15
                  }}
                  />


        </View>

     </View>
    </View>
    </SafeAreaView>
    //  </AppSafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    loginScreenFull:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        // backgroundColor:'red'
    },
    loginScreen:{
        
        
        alignItems:'center',
        display:'flex',
        justifyContent:'center',
        
    },
    loginScreenLogo:{
        width:175,
        
        height:175
    },
    loginScreenBody:{
        // justifyContent:'center',
        alignContent:'center',
        // borderColor:'gray',
        // borderWidth:1,
        // borderRadius:5,
        // width:'100%',
        height:425,
        width:350,
        marginTop:50
       

    },
    loginScreenBodyTop:{
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:10

    },
    loginScreenBodyTopText:{
        fontSize:50,
        color:'black',
        fontWeight:'700',
        marginTop:5
    },
    loginScreenBodyInputPart:{
        // justifyContent:'center',
        marginTop:30,
        width:'92%',
        marginLeft:'auto',
        marginRight:'auto'
    },
    loginScreenBodyInputPartInside:{
        marginTop:10

    },

    // loginScreenInput:{
    //     // marginTop:10
    //     // paddingLeft:10,
    //     // width:'80%',
    //     // marginLeft:'auto',
    //     // marginRight:'auto',
    //     // borderRadius:15,

    // },
    loginScreenBodyPicker:{
        borderColor:'black',
        borderWidth:1,
        width:'95%',
        marginLeft:'auto',
        marginRight:'auto'

    }
})