import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DateIcons from 'react-native-vector-icons/Fontisto';


const DateIcon = ({extraStyles}) => {
  return (
    <View style={[styles.dateIconView,{...extraStyles}]}>
      {/* <Text style={{fontWeight:'bold'}}> */}

    <DateIcons
// onPress={()=>{
//     setInput({
//         ...input,
//         passwordShow:false
//     })
// } }
name='date'
size={24}
color='black'
  font
/>
{/* </Text> */}

    </View>
  )
}

export default DateIcon

const styles = StyleSheet.create({
    dateIconView:{
        position:'absolute',
        right:25,
        top:7
      }
})