import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LabourChargesView = ({index,LabourBag, DispatchDate,Quantity, LabourTotal,Paty}) => {
  return (
    <View style={styles.LabourChargesView}>
        <View style={styles.LabourChargesViewBody}>

        <View style={{width:'10%'}}>
            <Text>{index ? index :'1'}</Text>
        </View>
        <View style={{width:'22%'}}>
            <Text>{DispatchDate ? DispatchDate :'Invalid date'}</Text>
        </View>
       


        <View style={{width:'17%'}}>
            <Text>{Paty ? Paty :'ewew'}</Text>
        </View>

        <View style={{width:'17%'}}>
            <Text>{Quantity ? Quantity :'1903'}</Text>
        </View> 
        <View style={{width:'15%'}}>
            <Text>{LabourBag ? LabourBag :'19.52'}</Text>
        </View> 
        <View style={{width:'20%'}}>
            <Text>{LabourTotal ? LabourTotal :'278.00'}</Text>
        </View>
        
       

        
      </View>
    </View>
  )
}

export default LabourChargesView

const styles = StyleSheet.create({
  LabourChargesView:{
    borderBottomColor:'gray',
    borderBottomWidth:0.2
  },
  LabourChargesViewBody:{
    flexDirection:'row',
    width:'95%',
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent:'space-between',
    marginTop:15,
    height:40
  }
})