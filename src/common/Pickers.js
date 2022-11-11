import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'

const Pickers = ({data,setPickerval,pickerVal,extrastyles}) => {
  return (
   
    <View style={[styles.loginScreenBodyPicker,{...extrastyles}]}>
    <Picker
           selectedValue={pickerVal}
           style={{ color:'black',
         
       
         width:'100%',
         backgroundColor:'white',
         
       
         
         }}
           onValueChange={(itemValue, itemIndex) =>{
               setPickerval(itemValue)

           }
       }
         >
           {data.map((userData,index)=> (
                  <Picker.Item
                  key={index}
                  
                  label={userData}  value={userData}  />)
   
   
           )}
   
   
     </Picker>
     </View>
  )
}

export default Pickers

const styles = StyleSheet.create({
    loginScreenBodyPicker:{
        borderColor:'black',
        borderWidth:2,
        width:'95%',
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:5

    }
})