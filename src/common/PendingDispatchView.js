import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PendingDispatchView = ({index,OrderID, OrderDate,Paty, Qty}) => {
  return (
    <View style={styles.PendingDispatchView}>
        <View style={styles.PendingDispatchBody}>

        <View style={{width:'7%'}}>
            <Text>{index ? index :'1'}</Text>
        </View>
        <View style={{width:'15%'}}>
            <Text>{OrderID ? OrderID :'132'}</Text>
        </View>


        <View>
            <Text>{OrderDate ? OrderDate :'11/12/22'}</Text>
        </View>

       

        
         <View>
            <Text>{Paty ? Paty :'ewew'}</Text>
        </View>


        <View>
            <Text>{Qty ? Qty :'1'}</Text>
        </View>

        
      </View>
    </View>
  )
}

export default PendingDispatchView

const styles = StyleSheet.create({
  PendingDispatchView:{
    borderBottomColor:'gray',
    borderBottomWidth:0.2
  },
  PendingDispatchBody:{
    flexDirection:'row',
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent:'space-between',
    marginTop:15,
    height:40
  }
})