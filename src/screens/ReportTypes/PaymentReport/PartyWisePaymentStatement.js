import { Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import { Button } from 'react-native-elements'
import { colors } from '../../../themes/colors'
import StockPositionView from '../../../common/StockPositionView'
import { commonStyles } from '../../../themes/commonStyles'
import { Picker } from '@react-native-picker/picker'
import { Constants } from '../../../helpers/Constants'
// import DateIcon from 'react-native-vector-icons/Fontisto';
import { CheckBox } from 'react-native-elements'
import OutstandingPaymentView from '../../../common/OutstandingPaymentView'
import DateIcon from '../../../common/DateIcon'
import BackButton from '../../../common/BackButton'
import CalenderInput from '../../../common/CalenderInput'
import DropdownIcon from 'react-native-vector-icons/Fontisto';
import SearchModels from '../../../common/SearchModels'
import PartyVisePaymentView from '../../../common/PartyVisePaymentView'







const PartyWisePaymentStatement = ({navigation}) => {
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

const [startdateVal, setStartDateVal] = useState('')
const [enddateVal, setEndDateVal] = useState('')
const [customerModelOpen, setCustomerModelOpne] = useState(false)
const [finalSearchCustomer, setfinalSearchCustomer] = useState('')

  return (
    <SafeAreaView>
    <View style={styles.PartyWisePaymentStatementTop}>
      <View style={[styles.PartyWisePaymentStatementTopBtn,{
    justifyContent:'center',

      }]}>
 
       <Button 
      title='Apply Fiters'
      containerStyle={{
        width:130,
      }}
      buttonStyle={{
        padding:10,
        backgroundColor:colors.primarySecond,
        borderRadius:5

      }}
      onPress={()=>{
        setstockInfo({
          ...stockInfo,
          filterModelOpen:true
        })
      }}
      />

      </View>

 

      <View style={styles.PartyWisePaymentStatementTopTexts}>
      <View style={{width:'12%'}}>
          <Text style={{color:colors.black}}>S.No</Text>
        </View>

        <View style={{width:'27%'}}>
          <Text style={{color:colors.black}}>Date </Text>
        </View>

         <View style={styles.PartyWisePaymentStatementTopTextsView}>
          <Text style={{color:colors.black}}>Party </Text>
        </View>

         <View style={styles.PartyWisePaymentStatementTopTextsView}>
          <Text style={{color:colors.black}}>Bill No.</Text>
        </View>


         <View style={styles.PartyWisePaymentStatementTopTextsView}>
          <Text style={{color:colors.black}}>Amount </Text>
        </View>
      
        

      

        
        
        
      </View>
  
    </View>
    <Modal
          visible={stockInfo.filterModelOpen}
          transparent
   
          animationType='fade'
        
          hardwareAccelerated
         
        >
<View style={styles.centered_view}>


<View style={[{...commonStyles.modelBody, width:'78%'}]}>

<View style={[{...commonStyles.createOrderView,marginTop:15, width:'80%'}]}>
      
      {/* <TouchableOpacity onPress={()=>setPurchaseInput({...purchaseInput,customerModelOpen:true})}> */}
      <TouchableOpacity onPress={()=>setCustomerModelOpne(true)}>
      <View style={[{...commonStyles.textInput,height:50,justifyContent:'center', borderWidth:1, borderRadius:0, }]}>
     <Text style={{fontSize:15,fontWeight:'400',color:colors.seventh, marginLeft:15 }}>
      {'Custom Filter'}
     </Text>

     
      </View>

        <View style={styles.dropdownIconView}>
        <DropdownIcon
   
    name='caret-down'
    size={11}
    color='gray'
  />
        </View>
      </TouchableOpacity>
     
      

 <SearchModels 
      searchType={'Search Customer'}
      modelopen={customerModelOpen}
      setModelOpen={setCustomerModelOpne}
      animationType={'slide'}
      finalSearch={finalSearchCustomer}
      setfinalSearch={setfinalSearchCustomer}
      

      
      />
      </View>


        <View style={styles.centered_viewInside}>
   <CalenderInput placeholder={'Start Date'} extraStyles={{borderWidth:0}}
   setDateVal={setStartDateVal} dateVal={startdateVal}/>

   </View>

   <View style={styles.centered_viewInside}>
   <CalenderInput placeholder={'End Date'} setDateVal={setEndDateVal}
      
      dateVal={enddateVal} extraStyles={{borderWidth:0}}/>
  
   </View>



                                <View style={[styles.PartyWisePaymentStatementTopBtn,{
                                  marginTop:'auto',
                                  marginBottom:10
                                }]}>
                                  <Button 
                                  onPress={()=>{
                                    setstockInfo({
                                      ...stockInfo,
                                      filterModelOpen:false
                                    })

                                  }}
                                  title='Apply'
                                  containerStyle={{
                                    width:105,
                                  }}
                                  buttonStyle={{
                                    padding:10,
                                    backgroundColor:colors.primarySecond,
                                    borderRadius:5
                            
                                  }}

                                  />
                                  <Button 
                                   onPress={()=>{
                                    setstockInfo({
                                      ...stockInfo,
                                      filterModelOpen:false
                                    })

                                  }}
                                  title='Clear'
                                  containerStyle={{
                                    width:105,
                                  }}
                                  buttonStyle={{
                                    padding:10,
                                    backgroundColor:colors.primarySecond,
                                    borderRadius:5
                            
                                  }}
                                  />
                                </View>

          </View>
          </View>
         
        </Modal>

    <View>
    <PartyVisePaymentView/>
    </View>
    </SafeAreaView>
  )
}

export default PartyWisePaymentStatement

const styles = StyleSheet.create({
  PartyWisePaymentStatementTopBtn:{
    flexDirection:'row',
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent:'space-between',
    marginTop:15
  },
  PartyWisePaymentStatementTopTexts:{
    flexDirection:'row',
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent:'space-between',
    marginTop:15

  },
  PartyWisePaymentStatementTop:{
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
  },
  viewSalesOrderCheckbox:{
    flexDirection:'row',
    // // alignContent:'centers',
    // borderWidth:1,
    // borderColor:'red',
    justifyContent:'flex-end',
    alignItems:'center',
    
  },
  viewSalesOrderCheckboxText:{
    color:colors.black,
    marginRight:-10
  },
  dropdownIconView:{
    position:'absolute',
    right:19,
    top:25
  },
  PartyWisePaymentStatementTopTextsView:{
    width:'20%'
}
})
