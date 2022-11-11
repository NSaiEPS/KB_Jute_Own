import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PartyVisePaymentView = ({index, Date,BillNo, Amount,Paty}) => {
  return (
    <View style={styles.PartyVisePaymentView}>
        <View style={styles.PartyVisePaymentViewBody}>

        <View style={{width:'5%'}}>
            <Text>{index ? index :'1'}</Text>
        </View>
        <View style={{width:'25%'}}>
            <Text>{Date ? Date :'Invalid date'}</Text>
        </View>
        


        <View style={{width:'20%'}}>
            <Text>{Paty ? Paty :'ewew'}</Text>
        </View>

        <View style={{width:'17%'}}>
            <Text>{BillNo ? BillNo :'1903'}</Text>
        </View> 

        <View style={{width:'15%'}}>
            <Text>{Amount ? Amount :'278.00'}</Text>
        </View>
        
       

        
      </View>
    </View>
  )
}

export default PartyVisePaymentView

const styles = StyleSheet.create({
  PartyVisePaymentView:{
    borderBottomColor:'gray',
    borderBottomWidth:0.2
  },
  PartyVisePaymentViewBody:{
    flexDirection:'row',
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent:'space-between',
    marginTop:15,
    height:40
  },

})