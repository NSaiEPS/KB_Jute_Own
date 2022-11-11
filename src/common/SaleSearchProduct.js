import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Input } from 'react-native-elements'
import { commonStyles } from '../themes/commonStyles'
import { colors } from '../themes/colors'

const SaleSearchProduct = ({name}) => {
    const [productInput, setproductInput] = useState({
        price:'',
        quantity:''
    })
  return (
    <View style={styles.saleSearchProduct}>
     <View style={styles.saleSearchProductName}>
        <Text style={{color:colors.black}}>
            {name}
        </Text>
     </View>
     <View style={styles.saleSearchProductPrice}>
        <TextInput 
         style={[{...commonStyles.textInput, borderWidth:1}]}
        placeholder='Price'
        value={productInput.price}
        onChangeText={(text)=>{
            setproductInput({
                ...productInput,
                price:text
            })

        }}
        keyboardType='decimal-pad'
        />
     </View>
     <View style={styles.saleSearchProductQunatity}>
        <Input 
        placeholder='Quantity'
        value={productInput.quantity}
        onChangeText={(text)=>{
            if(productInput.price){
            setproductInput({
                ...productInput,
                quantity:text
            })}
            else {
                alert('Please enter price first')
            }

        }}
        keyboardType='decimal-pad'


        />
     </View>
    </View>
  )
}

export default SaleSearchProduct

const styles = StyleSheet.create({
    saleSearchProduct:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:50
    },
    saleSearchProductName:{
        width:'33%'
    },
    saleSearchProductPrice:{
        width:'33%'

    },
    saleSearchProductQunatity:{
        width:'33%'

    }
})