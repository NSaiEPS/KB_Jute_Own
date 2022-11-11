import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PurchaseRegisterView = ({index,Order, Date,Products, InvNo,Paty}) => {
  return (
    <View style={styles.PurchaseRegisterView}>
        <View style={styles.PurchaseRegisterViewBody}>

        <View style={{width:'10%', }}>
            <Text>{index ? index :'1'}</Text>
        </View>
        <View style={{width:'18%', }}>
            <Text>{Order ? Order :'132'}</Text>
        </View>


        <View style={{width:'19%', }}>
            <Text>{Date ? Date :'11/12/22'}</Text>
        </View>

        <View style={{width:'17%', }}>
            <Text>{Products ? Products :'etge'}</Text>
        </View> 

        <View style={{width:'12%', }}>
            <Text>{InvNo ? InvNo :'278'}</Text>
        </View>
        
        <View style={{width:'16%', }}>
            <Text>{Paty ? Paty :'ewew'}</Text>
        </View>

        
      </View>
    </View>
  )
}

export default PurchaseRegisterView

const styles = StyleSheet.create({
  PurchaseRegisterView:{
    borderBottomColor:'gray',
    borderBottomWidth:0.2
  },
  PurchaseRegisterViewBody:{
    flexDirection:'row',
    width:'85%',
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent:'space-between',
    marginTop:15,
    height:40
  }
})