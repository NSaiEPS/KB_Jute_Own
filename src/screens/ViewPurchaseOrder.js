import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import PurchaseOrder from '../common/PurchaseOrder'
import BackButton from '../common/BackButton'
// import  PurchaseOrder  from '../common';



const ViewPurchaseOrder = ({navigation}) => {
  useLayoutEffect(()=>{

    navigation.setOptions({
      headerBackTitleVisible:false,
      headerBackVisible:false,

  
  headerLeft:()=>(
    <BackButton navigation={navigation}/>
)})
  },[])
  return (
    <SafeAreaView>
      <View style={styles.viewSalesOrder}>
        <TextInput 
        style={styles.viewSalesOrderInput}
        placeholder='Search Order ID'
        />
      </View>

      <View>
      <PurchaseOrder/>
      </View>
    </SafeAreaView>
  )
}

export default ViewPurchaseOrder

const styles = StyleSheet.create({
  viewSalesOrder:{
marginTop:7
  },
  viewSalesOrderInput:{
    borderColor:'black',
    borderWidth:1,
    width:'90%',
    marginLeft:'auto',
    marginRight:"auto",
     borderRadius:10,
     marginTop:10,
     paddingLeft:25,
     fontSize:17,
     height:40
  }
})