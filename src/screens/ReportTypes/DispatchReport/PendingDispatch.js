



 










import { Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import { Button } from 'react-native-elements'
import { colors } from '../../../themes/colors'
import StockPositionView from '../../../common/StockPositionView'
import { commonStyles } from '../../../themes/commonStyles'
import { Picker } from '@react-native-picker/picker'
import { Constants } from '../../../helpers/Constants'
import DateIcon from 'react-native-vector-icons/Fontisto';
import SaleRegisterView from '../../../common/SaleRegisterView'
import PurchaseRegisterView from '../../../common/PurchaseRegisterView'
import PendingDispatchView from '../../../common/PendingDispatchView'
import DispatchReportView from '../../../common/DispatchReportView'
import BackButton from '../../../common/BackButton'





const PendingDispatch = ({navigation}) => {
useLayoutEffect(()=>{

  navigation.setOptions({
    headerBackTitleVisible:false,
    headerBackVisible:false,


headerLeft:()=>(
<BackButton navigation={navigation}/> 
)})
},[])

const [stockInfo, setstockInfo] = useState({
  slectProduct:'',
  filterModelOpen:false,
  totalItems:0,
  searchCustomerModelOpen:false,
  searchCustomerInput:'',
  searchCustomerItem:'',
  selectLocation:'',
  startDate:'',
  endDate:''



})



  return (
<DispatchReportView type={'Order'}/>
  )
}

export default PendingDispatch

const styles = StyleSheet.create({
  PendingDispatchTopBtn:{
    flexDirection:'row',
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent:'space-between',
    marginTop:15
  },
  PendingDispatchTopTexts:{
    flexDirection:'row',
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent:'space-between',
    marginTop:15

  },
  PendingDispatchTop:{
    borderBottomColor:'gray',
    borderBottomWidth:.5,
    paddingBottom:10
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
    // width:'90%'
  },
  centered_viewInside:{
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
    borderWidth:1,
    borderColor:colors.black,
    marginTop:10
  },
  dateIconView:{
    position:'absolute',
    right:25,
    top:12
  }
})



