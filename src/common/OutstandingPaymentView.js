import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OutstandingPaymentView = ({index,Paty,INVDate, INV, Amount, Days}) => {
  return (
    <View style={styles.OutstandingPaymentView}>
        <View style={styles.PendingDispatchBody}>

        <View>
            <Text>{index ? index :'1'}</Text>
        </View>
        

        <View>
            <Text>{INVDate ? INVDate :'11/12/22'}</Text>
        </View>

        <View>
            <Text>{INV ? INV :'132'}</Text>
        </View>


       

        
         <View>
            <Text>{Paty ? Paty :'ewew'}</Text>
        </View>


        <View>
            <Text>{Amount ? Amount :'42214.00'}</Text>
        </View>

        <View>
            <Text>{Days ? Days :'0'}</Text>
        </View>

        
      </View>
    </View>
  )
}

export default OutstandingPaymentView

const styles = StyleSheet.create({
  OutstandingPaymentView:{
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