import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import { Button } from 'react-native-elements'
import { colors } from '../../../themes/colors'
import StockPositionView from '../../../common/StockPositionView'
import { commonStyles } from '../../../themes/commonStyles'
import { Picker } from '@react-native-picker/picker'
import { Constants } from '../../../helpers/Constants'
import Pickers from '../../../common/Pickers'
import BackButton from '../../../common/BackButton'




const StockPosition = ({navigation}) => {
useLayoutEffect(()=>{

  navigation.setOptions({
    headerBackTitleVisible:false,
    headerBackVisible:false,


headerLeft:()=>(
  <BackButton navigation={navigation}/>
)})
},[])

const [stockInfo, setstockInfo] = useState({
  filterItem:'',
  filterModelOpen:false,
  totalItems:0

})

const [pickerValProducut, setpickerValProducut] = useState('')


  return (
    <SafeAreaView>
    <View style={styles.stockpositionTop}>
      <View style={styles.stockpositionTopBtn}>
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

      <View style={styles.stockpositionTopTexts}>
        <View>
          <Text style={{color:colors.black}}>S.No</Text>
        </View>
        <View>
          <Text style={{color:colors.black}}>Item Name</Text>
        </View>
        <View>
          <Text style={{color:colors.black}}>Quantity</Text>
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
                                      
<View style={[{...commonStyles.createOrderView, width:'90%',marginTop:15}]}>
  <Pickers
data={Constants.createPurchaseOrder.selectProduct}
setPickerval={setpickerValProducut}
pickerVal={pickerValProducut}
extrastyles={{ width:'100%'}}
/>

 </View>

                                <View style={[styles.stockpositionTopBtn,{
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
      <StockPositionView/>
    </View>
    </SafeAreaView>
  )
}

export default StockPosition

const styles = StyleSheet.create({
  stockpositionTopBtn:{
    flexDirection:'row',
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent:'space-between',
    marginTop:15
  },
  stockpositionTopTexts:{
    flexDirection:'row',
    width:'70%',
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent:'space-between',
    marginTop:15

  },
  stockpositionTop:{
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
  }
})