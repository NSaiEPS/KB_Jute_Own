import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import { colors } from '../themes/colors'
import { buttonHeight, universalPaddingHorizontal, universalPaddingVertical } from '../themes/dimensions'
import { commonStyles } from '../themes/commonStyles'

const PurchaseOrder = () => {
  return (
    <View style={[styles.purchaseOrder,{
        ...commonStyles.boxShadow

    }]}>
      <View style={styles.purchaseOrderInside}>
        <View style={styles.purchaseOrderTop}>
            <View style={styles.purchaseOrderTopLeft}>
                <Text style={styles.purchaseOrderTopText}>Invoice Number:-</Text>
                <Text style={styles.purchaseOrderTopText}>495</Text>
            </View>
            {/* <View style={styles.purchaseOrderTopRight}>
                <Text style={styles.purchaseOrderTopText}>
                    Aslali
                </Text>
            </View> */}
        </View>


        <View style={styles.purchaseOrderBitween}>
           
            <Text style={styles.purchaseOrderBitweenText}>Order Id:- 3314 </Text>
            <Text style={styles.purchaseOrderBitweenText}>Agent name:- Jaikumar </Text>
            <Text style={styles.purchaseOrderBitweenText}>Mill name:- Durga FIbre </Text>
            <Text style={styles.purchaseOrderBitweenText}>Product:- 8 LBS A-one </Text>
            <Text style={styles.purchaseOrderBitweenText}>Product Date:- 27-10-2022 </Text>
            <Text style={styles.purchaseOrderBitweenText}>Depot Location:- Aslali </Text>
            <Text style={styles.purchaseOrderBitweenText}>Quanity:- 100 </Text>
            <Text style={styles.purchaseOrderBitweenText}>Labour Charges:- 0  </Text>
            <Text style={styles.purchaseOrderBitweenText}>Remark:- null  </Text>
            
            
        </View>


        <View style={styles.purchaseOrderBottom}>
            <TouchableOpacity style={styles.purchaseOrderBottomBtns}>
                <Text style={styles.purchaseOrderBottomText}>
                View 
                </Text>
                
                </TouchableOpacity> 
            
            
            
            

            
        </View>



      </View>
    </View>
  )
}

export default PurchaseOrder

const styles = StyleSheet.create({
    purchaseOrder:{
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
        backgroundColor:colors.white,
        marginTop:20

    },
    purchaseOrderInside:{
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
        marginVertical:universalPaddingVertical


    },
    purchaseOrderTop:{
        flexDirection:'row',
       
        // borderWidth:1,
        // borderColor:'red',
        backgroundColor:colors.primarySecond,
        // width:'105%',
        // marginLeft:'auto',
        // marginRight:'auto',
        padding:7,
        borderRadius:5,
        paddingLeft:10

    },
    purchaseOrderTopLeft:{
        flexDirection:'row',
        marginRight:25
    },
    purchaseOrderTopText:{
        color:colors.white,
        fontWeight:'700'
    },
    purchaseOrderBitween:{
        width:'95%',
        marginLeft:'auto',
        marginRight:'auto',
        marginVertical:universalPaddingVertical

    },
    purchaseOrderBitweenText:{
        color:colors.black
    },
    purchaseOrderBottom:{
        flexDirection:'row',
        marginBottom:10

    },
    purchaseOrderBottomBtns:{
        // height:buttonHeight,
        // padding:universalPaddingHorizontal
        backgroundColor:colors.primarySecond,
        marginLeft:10,
        padding:7,
        width:75,
        alignItems:'center',
        borderRadius:10

    },
    purchaseOrderBottomText:{
        color:colors.white,
        fontWeight:'700',
        fontSize:11
    }
})