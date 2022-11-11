import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import { commonStyles } from '../themes/commonStyles'
import { Button } from 'react-native-elements'
import { Picker } from '@react-native-picker/picker'
import { Constants } from '../helpers/Constants'
// import { color } from 'react-native-elements/dist/helpers'
import { colors } from '../themes/colors'
import LockIcon from 'react-native-vector-icons/Fontisto';
import Pickers from '../common/Pickers'
import DateIcon from '../common/DateIcon'
import BackButton from '../common/BackButton'
import CalenderInput from '../common/CalenderInput'


const CreatePurchaceOrder = ({navigation}) => {
  useLayoutEffect(()=>{

    navigation.setOptions({
      headerBackTitleVisible:false,
      headerBackVisible:false,

  
  headerLeft:()=>(
<BackButton navigation={navigation}/>
)})
  },[])


  const [purchaseInput, setPurchaseInput] = useState(
    {
      selectProduct:'',
      quantity:0,
      maillname:'',
      invNumber:10,
      puchaseDate:'',
      depotLocation:'',
      labourCharges:100,
      agentName:'',
      remark:''
    }
  )

  const [pickerValProducut, setpickerValProducut] = useState('')
  const [pickerValDepotLocation, setpickerValDepotLocation] = useState('')
  const [dateVal, setDateVal] = useState('')

  

  return (
   
   <SafeAreaView>
   <ScrollView>
   <View style={[{...commonStyles.createOrderView}]}>
      <View>
        <Text style={[{...commonStyles.createOrderViewText}]}>Select Product</Text>
      </View>
      {/* <View style={{...commonStyles.pickerViewStyle}}>



                       <Picker
                      //  itemStyle={{height: 40,color:'red'}}
                       
                        selectedValue={purchaseInput.selectProduct}
                        style={[{...commonStyles.pickerStyle}]}
                        onValueChange={(itemValue, itemIndex) =>{
                            setPurchaseInput({
                                ...purchaseInput,
                                selectProduct:itemValue
                            })}}>
                          {Constants.createPurchaseOrder.selectProduct.map((userData,index)=> (
                               <Picker.Item
                               key={index}
                               
                               label={userData}  value={userData}  />)
                
                
                        )}
                                
                                </Picker>




      </View>
     */}
    
    <View style={[{...commonStyles.createOrderView, width:'100%',marginTop:15}]}>
  <Pickers
data={Constants.createPurchaseOrder.selectProduct}
setPickerval={setpickerValProducut}
pickerVal={pickerValProducut}
extrastyles={{borderWidth:2, width:'100%'}}
/>

 </View>
    
    </View>

    <View style={[{...commonStyles.createOrderView}]}>
      <View>
        <Text style={[{...commonStyles.createOrderViewText}]}>Quantity</Text>
      </View>
      <View>
        <TextInput
         style={[{...commonStyles.textInput}]}
        // placeholder=''
        value={purchaseInput.quantity}
        keyboardType='decimal-pad'
        onChangeText={(text)=>{
          setPurchaseInput({
            ...purchaseInput,
            quantity:text
          })
        }}
        // defaultValue={purchaseInput.quantity}
        
        />
      </View>
    </View>

    <View style={[{...commonStyles.createOrderView}]}>
      <View>
        <Text style={[{...commonStyles.createOrderViewText}]}>Mill name</Text>
      </View>
      <View>
        <TextInput
         style={[{...commonStyles.textInput}]}
           placeholder='Maill name'
           value={purchaseInput.maillname}
          //  keyboardType='decimal-pad'
           onChangeText={(text)=>{
             setPurchaseInput({
               ...purchaseInput,
               maillname:text
             })
           }}
        />
      </View>
    </View>

    <View style={[{...commonStyles.createOrderView}]}>
      <View>
        <Text style={[{...commonStyles.createOrderViewText}]}>INV Number</Text>
      </View>
      <View>
        <TextInput
         style={[{...commonStyles.textInput}]}
          placeholder='INV Number'
          value={purchaseInput.invNumber}
          keyboardType='decimal-pad'
          onChangeText={(text)=>{
            setPurchaseInput({
              ...purchaseInput,
              invNumber:text
            })
          }}
        />
      </View>
    </View>

    <View style={[{...commonStyles.createOrderView}]}>
      <View>
        <Text style={[{...commonStyles.createOrderViewText}]}>Puchase Date</Text>
      </View>
      
      <CalenderInput placeholder={'Purchase Date'} setDateVal={setDateVal} dateVal={dateVal} extraStyles={{height:55, paddingTop:7}}/>
     
    </View>

    <View style={[{...commonStyles.createOrderView}]}>
      <View>
        <Text style={[{...commonStyles.createOrderViewText}]}> Select Depot Location</Text>
      </View>
    

      {/* <View style={{...commonStyles.pickerViewStyle}}> */}
   


      <View style={[{...commonStyles.createOrderView, width:'100%',marginTop:15}]}>
  <Pickers
data={Constants.createPurchaseOrder.DepotLocation}
setPickerval={setpickerValDepotLocation}
pickerVal={pickerValDepotLocation}
extrastyles={{ width:'100%'}}
/>

 </View>

{/* </View> */}
    </View>

    <View style={[{...commonStyles.createOrderView}]}>
      <View>
        <Text style={[{...commonStyles.createOrderViewText}]}>Labour Charges</Text>
      </View>
      <View>
        <TextInput
         style={[{...commonStyles.textInput}]}
          placeholder='Labour Charges'
          value={purchaseInput.labourCharges}
          keyboardType='decimal-pad'
          onChangeText={(text)=>{
            setPurchaseInput({
              ...purchaseInput,
              labourCharges:text
            })
          }}
        />
      </View>
    </View>

    <View style={[{...commonStyles.createOrderView}]}>
      <View>
        <Text style={[{...commonStyles.createOrderViewText}]}>Agent Name</Text>
      </View>
      <View>
        <TextInput
         style={[{...commonStyles.textInput}]}
           placeholder='Agent Name'
           value={purchaseInput.agentName}
          //  keyboardType='decimal-pad'
           onChangeText={(text)=>{
             setPurchaseInput({
               ...purchaseInput,
               agentName:text
             })
           }}
        />
      </View>
    </View>

    <View style={[{...commonStyles.createOrderView}]}>
      <View>
        <Text style={[{...commonStyles.createOrderViewText}]}>Remark</Text>
      </View>
      <View>
        <TextInput
        style={[{...commonStyles.textInput}]}
         
          placeholder='Remark'
          value={purchaseInput.remark}
          // keyboardType='decimal-pad'
          onChangeText={(text)=>{
            setPurchaseInput({
              ...purchaseInput,
              remark:text
            })
          }}
        />
      </View>
    </View>


    <View style={[{...commonStyles.createOrderView,
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20
    }]}>
      <Button 
      title='SUBMIT'
      containerStyle={{width:160}}
      buttonStyle={{backgroundColor:colors.primarySecond}}
      />
      <Button 
      title='CANCEL'
      containerStyle={{width:160}}
      buttonStyle={{backgroundColor:colors.primarySecond}}
      
      />

    </View>
   </ScrollView>
   </SafeAreaView>
  )
}

export default CreatePurchaceOrder

const styles = StyleSheet.create({
  dateIconView:{
    position:'absolute',
    right:25,
    top:17
  }
})