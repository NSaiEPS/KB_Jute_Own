import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchCustomerModel = ({data}) => {
    // const {Modelvisible, setModelVisible,animationType,}
  return (
    <View>
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
        </Modal>
    </View>
  )
}

export default SearchCustomerModel

const styles = StyleSheet.create({})