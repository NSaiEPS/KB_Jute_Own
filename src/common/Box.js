import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import {ReportSelectedAction} from '../Redux/slice/reportSlice/ReportSlice'
import { colors } from '../themes/colors'
import { commonStyles } from '../themes/commonStyles'


const Box = ({name,navigateTo,navigation,dispatching,index,length}) => {
    // console.log((index+1) %2)
    // console.log(dispatching,'dispatching')
    // console.log(name.split(" ").join("_"))
    // console.log(navigateTo,'box')
    let dispatch=useDispatch()
  return (
    <View style={[styles.box,{
        height:navigateTo==='ReportTypes' && name!=='Reports' ? 175:150,
        // width:navigateTo==='ReportTypes' && name!=='Reports' ? 155:175,
        // maxWidth:'40%',
        // flex:1,
        marginLeft:(index+1)%2===0? 10:0,
        marginRight:(index+1)%2!==0 && length>1 ? 7:0,
        
        ...commonStyles.boxShadow,
        backgroundColor:(index+1)%2===0? 'red':'green'
    }]}>
    <TouchableOpacity style={styles.boxInsideText}
    onPress={()=>{
        navigation.navigate(`${navigateTo}`)
        if((navigateTo.includes('Report') && name!=='Reports')){
            dispatch(
                ReportSelectedAction(
                    (name.split(" ").join("_"))

                )

            )
            // alert('dispatched',name.split(" ").join("_"))
        }
        

    }}
    
    >
    <Text style={{
        fontWeight:(navigateTo.includes('Report') && name!=='Reports') ? '700':'400',
        color:colors.black
    }}>
       {name}
    </Text>

    </TouchableOpacity>
    
</View>
  )
}

export default Box

const styles = StyleSheet.create({
  box:{
    height:150,
    // width:175,
    marginTop:17,
    // marginLeft:12,
    flex:0.5

    
   
    // shadowColor: '#000000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,  
    // elevation: 3

  
    
    
},
boxInsideText:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
},
})