import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SaleRegisterView = ({index,Order, Date, Inv,Paty, InvAmt}) => {
  return (
    <View style={styles.SaleRegisterView}>
        <View style={styles.SaleRegisterViewBody}>

        <View>
            <Text>{index ? index :'1'}</Text>
        </View>
        <View style={{ width:'14%'}}>
            <Text style={{alignSelf:'flex-end'}}>{Order ? Order :'132'}</Text>
        </View>


        <View>
            <Text>{Date ? Date :'11/12/22'}</Text>
        </View>

        <View>
            <Text>{Inv ? Inv :'1'}</Text>
        </View> 
        
         <View>
            <Text>{Paty ? Paty :'ewew'}</Text>
        </View>

        <View>
            <Text>{InvAmt ? InvAmt :'278.00'}</Text>
        </View>
      </View>
    </View>
  )
}

export default SaleRegisterView

const styles = StyleSheet.create({
  SaleRegisterView:{
    borderBottomColor:'gray',
    borderBottomWidth:0.2
  },
  SaleRegisterViewBody:{
    flexDirection:'row',
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent:'space-between',
    marginTop:15,
    height:40
  }
})