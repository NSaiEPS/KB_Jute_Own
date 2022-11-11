import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons'


const BackButton = ({navigation}) => {
  return (
    <TouchableOpacity
    style={{
        marginLeft:10
    }}
    
    
    >
      <TouchableHighlight 
      activeOpacity={0.5}
      underlayColor="#00000015"
      
      onPress={navigation.goBack}
      style={styles.backButtonhighlight}>
 <Icon 
    
    name='arrow-back-ios'
    size={24}
    color='white'
    />   
    </TouchableHighlight>
     </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
  backButtonhighlight:{
    // borderWidth:1,
    // borderColor:'red',
    height:40,
    width:48,
    paddingLeft:7,
    // alignContent:'center'
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  }
})