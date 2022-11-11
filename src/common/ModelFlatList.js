import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../themes/colors'

const ModelFlatList = ({name,extraStyles,setSearchinput,setfinalSearch, index, length}) => {
  return (
    <TouchableOpacity style={[styles.modelflatList,{ ...extraStyles, marginBottom: length===index+1 ? 50:10}]} 
    onPress={()=>{
        setSearchinput(name)
        setfinalSearch(name)
         
    }}
    >
        <Text style={styles.modelflatListText}>
            {name}
        </Text>
    
    </TouchableOpacity>
  )
}

export default ModelFlatList

const styles = StyleSheet.create({
    modelflatList:{
        marginTop:1,
        paddingTop:15,
        paddingLeft:15,
        // marginBottom:10,
        // borderColor:'red',
        // borderWidth:1
    },
    modelflatListText:{
        fontSize:18,
        // fontWeight:'500',
        color:colors.black
    }
})