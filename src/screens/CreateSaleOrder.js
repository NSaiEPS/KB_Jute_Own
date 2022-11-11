import { FlatList, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import { commonStyles } from '../themes/commonStyles'
import { Button } from 'react-native-elements'
import { Picker } from '@react-native-picker/picker'
import { Constants } from '../helpers/Constants'
// import { color } from 'react-native-elements/dist/helpers'
import { colors } from '../themes/colors'
import DropdownIcon from 'react-native-vector-icons/Fontisto';
import SaleSearchProduct from '../common/SaleSearchProduct'
import Pickers from '../common/Pickers'
import BackButton from '../common/BackButton'
import SearchModels from '../common/SearchModels'


const CreateSaleOrder = ({navigation}) => {
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
      selectCustomer:'',
      selectTransport:'',
      selectProduct:'',
      selectAgent:'',
      selectLocation:'',
      labourCharges:'',
      agentName:'',
      remark:'',
      // customerModelOpen:false,
      transportModelOpen:false,
      productModelOpen:false,
      searchCustomer:'',
      searchTransport:'',
      searchProduct:""

    }
  )

  const [pickerValAgent, setPickervalAgent] = useState('')
  const [pickerValLocation, setPickervalLocation] = useState('')
  const [customerModelOpen, setCustomerModelOpne] = useState(false)
  const [finalSearchCustomer, setfinalSearchCustomer] = useState('')


  

  return (
   <SafeAreaView>

  
   
   <ScrollView>


<View style={[{...commonStyles.createOrderView,marginTop:15}]}>
      
      {/* <TouchableOpacity onPress={()=>setPurchaseInput({...purchaseInput,customerModelOpen:true})}> */}
      <TouchableOpacity onPress={()=>setCustomerModelOpne(true)}>
      <View style={[{...commonStyles.textInput,height:50,justifyContent:'center'}]}>
     <Text style={{fontSize:15,fontWeight:'400',color:colors.black }}>
      {'Select Customer'}
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
      {/* modelopen,setModelOpen,animationType,searchType



      <Modal
          visible={purchaseInput.customerModelOpen}
          transparent
   
          animationType='slide'
        
          hardwareAccelerated
          onRequestClose={()=>{
            setPurchaseInput({
              ...purchaseInput,
              customerModelOpen:false
            })

          }}
        >
          <TouchableOpacity style={styles.centered_view}
          onPress={()=>{
            setPurchaseInput({
              ...purchaseInput,
              customerModelOpen:false
            })

          }}
          >
            <View style={[{...commonStyles.modelBody}]}>


            
           <View>
           <TextInput
         style={[{...commonStyles.textInput}]}
          placeholder='Search Customer'
          value={purchaseInput.searchCustomer}
          onChangeText={(text)=>{
            setPurchaseInput({
              ...purchaseInput,
              searchCustomer:text
            })
          }}
        />
        {
          purchaseInput.searchCustomer &&
        
        <View style={styles.dropdownIconView}>
          <DropdownIcon 
          onPress={()=>{
            setPurchaseInput({
              ...purchaseInput,
              searchCustomer:''
            })
          }}
          name='close-a'
          size={15}
          color="gray"
          />
        </View>}
           </View>
           <View>
            <Text>
              lists here
            </Text>
           </View>
           </View>

            
          </TouchableOpacity>
        </Modal> */}




     
    </View>

    <View style={[{...commonStyles.createOrderView,marginTop:15}]}>
      
    <View style={[{...commonStyles.textInput,height:50,justifyContent:'center'}]}>
     <Text style={{fontSize:15,fontWeight:'400',color:colors.black }}>
      {'No city selected'}
     </Text>

     
      </View>
     
    </View>
    
    <View style={[{...commonStyles.createOrderView,marginTop:15}]}>
      
      <TouchableOpacity onPress={()=>{
        setPurchaseInput({
          ...purchaseInput,
          transportModelOpen:true

        })

      }}>
      <View style={[{...commonStyles.textInput,height:50,justifyContent:'center'}]}>
     <Text style={{fontSize:15,fontWeight:'400',color:colors.black }}>
      {'Select Transport'}
     </Text>

     
      </View>

        <View style={styles.dropdownIconView}>
        <DropdownIcon
   
    name='caret-down'
    size={11}
    color='gray'
  />
        </View>

        <Modal
          visible={purchaseInput.transportModelOpen}
          transparent
   
          animationType='slide'
        
          hardwareAccelerated
          onRequestClose={()=>{
            setPurchaseInput({
              ...purchaseInput,
              transportModelOpen:false
            })

          }}
        >
          <TouchableOpacity style={styles.centered_view}
          onPress={()=>{
            setPurchaseInput({
              ...purchaseInput,
              transportModelOpen:false
            })

          }}
          >
            <View style={[{...commonStyles.modelBody}]}>


            
           <View>
           <TextInput
         style={[{...commonStyles.textInput}]}
          placeholder='Search Transport'
          value={purchaseInput.searchTransport}
          onChangeText={(text)=>{
            setPurchaseInput({
              ...purchaseInput,
              searchTransport:text
            })
          }}
        />
            {
          purchaseInput.searchTransport &&
        
        <View style={styles.dropdownIconView}>
          <DropdownIcon 
          onPress={()=>{
            setPurchaseInput({
              ...purchaseInput,
              searchTransport:''
            })
          }}
          name='close-a'
          size={15}
          color="gray"
          />
        </View>}
           </View>
           <View>
            <Text>
              lists here
            </Text>
           </View>
           </View>

            
          </TouchableOpacity>
        </Modal>



      </TouchableOpacity>
     
    </View>



    {/* <View style={[{...commonStyles.createOrderView,marginTop:15}]}>
     
      <View style={{...commonStyles.pickerViewStyle}}>



                       <Picker
                     
                       
                        selectedValue={purchaseInput.selectAgent}
                        style={[{...commonStyles.pickerStyle}]}
                        onValueChange={(itemValue, itemIndex) =>{
                            setPurchaseInput({
                                ...purchaseInput,
                                selectAgent:itemValue
                            })}}>
                          {Constants.createSaleOrder.selectAgent.map((userData,index)=> (
                               <Picker.Item
                               key={index}
                               
                               label={userData}  value={userData}  />)
                
                
                        )}
                                
                                </Picker>




      </View>
    </View> */}


  <View style={[{...commonStyles.createOrderView, width:'100%',marginTop:15}]}>
  <Pickers
data={Constants.createSaleOrder.selectAgent}
setPickerval={setPickervalAgent}
pickerVal={pickerValAgent}
extrastyles={{borderWidth:2}}
/>

 </View>


    {/* <View style={[{...commonStyles.createOrderView,marginTop:15}]}>
      
    

      <View style={{...commonStyles.pickerViewStyle}}>
   




   <Picker
     selectedValue={purchaseInput.selectLocation}
     style={[{...commonStyles.pickerStyle}]}
     onValueChange={(itemValue, itemIndex) =>{
         setPurchaseInput({
             ...purchaseInput,
             selectLocation:itemValue})} }>
     {Constants.createSaleOrder.SelectLocation.map((userData,index)=> (
            <Picker.Item
            key={index}
            
            label={userData}  value={userData}  />)


     )}
             </Picker>

</View>
    </View>
   */}
<View style={[{...commonStyles.createOrderView, width:'100%',marginTop:15}]}>
  <Pickers
data={Constants.createSaleOrder.SelectLocation}
setPickerval={setPickervalLocation}
pickerVal={pickerValLocation}
extrastyles={{borderWidth:2}}
/>

 </View>
  

    <View style={[{...commonStyles.createOrderView,marginTop:15}]}>
      
      <TouchableOpacity onPress={()=>{
        setPurchaseInput({
          ...purchaseInput,
          productModelOpen:true
        })
      }}>
      <View style={[{...commonStyles.textInput,height:50,justifyContent:'center'}]}>
     <Text style={{fontSize:15,fontWeight:'400',color:colors.black }}>
      {'Select Product'}
     </Text>

     
      </View>

        <View style={styles.dropdownIconView}>
        <DropdownIcon
    
    name='caret-down'
    size={11}
    color='gray'
  />
        </View>

        <Modal
          visible={purchaseInput.productModelOpen}
          transparent
   
          animationType='slide'
        
          hardwareAccelerated
          onRequestClose={()=>{
            setPurchaseInput({
              ...purchaseInput,
              productModelOpen:false
            })

          }}
        >
          <TouchableOpacity style={styles.centered_view}
          onPress={()=>{
            setPurchaseInput({
              ...purchaseInput,
              productModelOpen:false
            })

          }}
          >
            <View style={[{...commonStyles.modelBody}]}>


            
           <View>
           <TextInput
         style={[{...commonStyles.textInput}]}
          placeholder='Search Product'
          value={purchaseInput.searchProduct}
          onChangeText={(text)=>{
            setPurchaseInput({
              ...purchaseInput,
              searchProduct:text
            })
          }}
        />
          {
          purchaseInput.searchProduct &&
        
        <View style={styles.dropdownIconView}>
          <DropdownIcon 
          onPress={()=>{
            setPurchaseInput({
              ...purchaseInput,
              searchProduct:''
            })
          }}
          name='close-a'
          size={15}
          color="gray"
          />
        </View>}
        
           </View>
           <View>
           <FlatList
        contentContainerStyle={{
          // height:500
   
            }}
           data={Constants.createSaleOrder.SearchProduct}
         
           scrollEnabled={true}keyExtractor={item => item}
           
       
           renderItem={({item,index,})=>{
            if( item.includes(purchaseInput.searchProduct))
        
           return(
            <SaleSearchProduct 
          
            name={item}/>)
            
            
            }}
            
            ListFooterComponent={()=>{
              return(
            <View style={{borderWidth:1, borderColor:colors.black, width:100, height:50,
            marginRight:'auto', marginLeft:'auto'}}>
              <View style={{alignSelf:'center',
              flexDirection:'row', marginTop:'auto', marginBottom:'auto'}}>
              <Text style={{color:colors.black}}>
                SUBMIT
              </Text>
              </View>
              </View>)}
            }
            />
           </View>
           </View>

            
          </TouchableOpacity>
        </Modal>

        
      </TouchableOpacity>
     
    </View>

  

    <View style={[{...commonStyles.createOrderView,marginTop:15}]}>
   
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



    <View style={[{...commonStyles.createOrderView,marginTop:15}]}>
    
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

    <View style={[{...commonStyles.createOrderView,marginTop:0}]}>
      <Text style={{color:colors.fifth}}>
        *Labour charges will be the multiplication of the charges entered by user and the total number of product
      </Text>
    </View>


    <View style={[{...commonStyles.createOrderView,marginTop:15}]}>
    
      <View>
        <TextInput
        style={[{...commonStyles.textInput}]}
         
          placeholder='NaN'
          value={purchaseInput.remark}
          // keyboardType='decimal-pad'
          // onChangeText={(text)=>{
          //   setPurchaseInput({
          //     ...purchaseInput,
          //     remark:text
          //   })
          // }}
          editable={false}
        />
      </View>
    </View>
    


    <View style={[{...commonStyles.createOrderView,
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:20
    }]}>
      <Button 
      title='SUBMIT'
      containerStyle={{width:130}}
      buttonStyle={{backgroundColor:colors.primarySecond,height:50}}
      />
    

    </View>
   </ScrollView>
   </SafeAreaView>
  )
}

export default CreateSaleOrder


const styles = StyleSheet.create({
  dropdownIconView:{
    position:'absolute',
    right:19,
    top:25
  },


  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
    // width:'90%'
  },

 
})