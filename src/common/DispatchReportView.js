

import { Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import { Button } from 'react-native-elements'
// import { colors } from '../../../themes/colors'
// import StockPositionView from '../../../common/StockPositionView'
// import { commonStyles } from '../../../themes/commonStyles'
import { Picker } from '@react-native-picker/picker'
// import { Constants } from '../../../helpers/Constants'
import DateIcon from 'react-native-vector-icons/Fontisto';
import PendingDispatchView from './PendingDispatchView'
import { colors } from '../themes/colors'
import { commonStyles } from '../themes/commonStyles'
import { Constants } from '../helpers/Constants'
import Pickers from './Pickers'
import CalenderInput from './CalenderInput'
// import SaleRegisterView from '../../../common/SaleRegisterView'
// import PurchaseRegisterView from '../../../common/PurchaseRegisterView'
// import PendingDispatchView from '../../../common/PendingDispatchView'





const DispatchReportView= ({type}) => {

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

const [pickerValProducut, setpickerValProducut] = useState('')
const [startdateVal, setStartDateVal] = useState('')
const [enddateVal, setEndDateVal] = useState('')

  return (
    <SafeAreaView>
    <View style={styles.DispatchReportViewop}>
      <View style={styles.DispatchReportViewopBtn}>
      <Button 
      title='Create PDF'
      containerStyle={{
        width:130,
      }}
      buttonStyle={{
        padding:10,
        backgroundColor:colors.primarySecond,
        borderRadius:5
      }}
      />
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

      <View style={styles.DispatchReportViewopTexts}>
        <View style={{width:'10%'}}>
          <Text style={{color:colors.black}}>S.No</Text>
        </View>

        <View style={{width:'17%'}}>
          <Text style={{color:colors.black}}>Order ID</Text>
        </View>

        <View>
          <Text style={{color:colors.black}}>{type} Date</Text>
        </View>


      
        <View>
          <Text style={{color:colors.black}}>Party</Text>
        </View>


        <View>
          <Text style={{color:colors.black}}>Qty</Text>
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




                                <View>
                                
        
        </View>


        <View>
        <View style={[{...commonStyles.createOrderView, width:'90%',marginTop:15}]}>
  <Pickers
data={Constants.createPurchaseOrder.selectProduct}
setPickerval={setpickerValProducut}
pickerVal={pickerValProducut}


extrastyles={{ width:'90%', borderWidth:1, borderRadius:0}}
/>

 </View>


        </View>



        

        

  
        <View style={styles.centered_viewInside}>
   <CalenderInput placeholder={'Start Date'} extraStyles={{borderWidth:0}}
   setDateVal={setStartDateVal} dateVal={startdateVal}/>

   </View>

   <View style={styles.centered_viewInside}>
   <CalenderInput placeholder={'End Date'} setDateVal={setEndDateVal}
      
      dateVal={enddateVal} extraStyles={{borderWidth:0}}/>
  
   </View>



                                <View style={[styles.DispatchReportViewopBtn,{
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
    <PendingDispatchView/>
    </View>
    </SafeAreaView>
  )
}

export default DispatchReportView

const styles = StyleSheet.create({
  DispatchReportViewopBtn:{
    flexDirection:'row',
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent:'space-between',
    marginTop:15
  },
  DispatchReportViewopTexts:{
    flexDirection:'row',
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent:'space-between',
    marginTop:15

  },
  DispatchReportViewop:{
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



