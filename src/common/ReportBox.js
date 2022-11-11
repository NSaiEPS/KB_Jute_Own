import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { colors } from '../themes/colors'
import { commonStyles } from '../themes/commonStyles'


const ReportBox = ({name,navigateTo,navigation,index,length}) => {
  const reportSelected = useSelector((state) => state?.reduxstore?.reportReducer?.reportSelect)
  
  return (
    <View style={[styles.homePageInsideView,{
      ...commonStyles.boxShadow, borderRadius:7,
      backgroundColor:(index+1)%2===0? 'red':'green',
      marginLeft:(index+1)%2===0? 10:0,
      // marginRight:(index+1)%2!==0? 7:0,
      marginRight:(index+1)%2!==0 && length>1 ? 7:0,


    }]}>
    <TouchableOpacity style={styles.homePageInsideViewInsideText}
    onPress={()=>{
      if(reportSelected==='Purchase_Report'){
        navigation.navigate(`${navigateTo} Purchase`)}
        else {
          navigation.navigate(`${navigateTo}`)}
    }}
    
    >
    <Text style={{
        fontWeight: '700',
        color:'black',
        textAlign:'center'
    }}>
       {name}
    </Text>

    </TouchableOpacity>
    
</View>
  )
}

export default ReportBox

const styles = StyleSheet.create({
  homePageInsideView:{
    height:150,
    width:170,
    marginTop:17,
    marginLeft:12,

    
    // borderRadius:15,
    // // shadowColor: '#000000',
    // // shadowOffset: { width: 0, height: 1 },
    // // shadowOpacity: 0.8,
    // // shadowRadius: 2,  
    // // elevation: 3

    // shadowOffset: {width: -2, height: 4},  
    // shadowColor: '#171717',  
    // shadowOpacity: 0.2,  
    // shadowRadius: 3, 
    // elevation:4,
    // backgroundColor:colors.white
    
    
},
homePageInsideViewInsideText:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
},
})