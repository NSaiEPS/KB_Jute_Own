import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import { colors } from '../themes/colors'
import { buttonHeight, universalPaddingHorizontal, universalPaddingVertical } from '../themes/dimensions'
import { commonStyles } from '../themes/commonStyles'

const SalesOrder = () => {
  return (
    <View style={[styles.salesOrder,{
        ...commonStyles.boxShadow

    }]}>
      <View style={styles.salesOrderInside}>
        <View style={styles.salesOrderTop}>
            <View style={styles.salesOrderTopLeft}>
                <Text style={styles.salesOrderTopText}>Delivery Status:-</Text>
                <Text style={styles.salesOrderTopText}>Dispatched</Text>
            </View>
            <View style={styles.salesOrderTopRight}>
                <Text style={styles.salesOrderTopText}>
                    Aslali
                </Text>
            </View>
        </View>


        <View style={styles.salesOrderBitween}>
            <Text style={styles.salesOrderBitweenText}>Order Date :- 15/10/22 </Text>
            <Text style={styles.salesOrderBitweenText}>Order Id:- 3314 </Text>
            <Text style={styles.salesOrderBitweenText}>City :- Kheda </Text>
            <Text style={styles.salesOrderBitweenText}>Customer:- ADERSH </Text>
            <Text style={styles.salesOrderBitweenText}>Transport:- SELF </Text>
            <Text style={styles.salesOrderBitweenText}>Invoice Number :- 1499 </Text>
            <Text style={styles.salesOrderBitweenText}>LR number :- GJ 07DA 2835 </Text>
            <Text style={styles.salesOrderBitweenText}>Payment Status :-Unpaid </Text>
            <Text style={styles.salesOrderBitweenText}>Invoice Value :- 21029 </Text>
            <Text style={styles.salesOrderBitweenText}>Balance Payment :- 21029 </Text>
            
        </View>


        <View style={styles.salesOrderBottom}>
            <TouchableOpacity style={styles.salesOrderBottomBtns}>
                <Text style={styles.salesOrderBottomText}>
                View Order
                </Text>
                
                </TouchableOpacity> 
            
            
            <TouchableOpacity style={styles.salesOrderBottomBtns}>
            <Text style={styles.salesOrderBottomText}>
                Share

                </Text>
                
                </TouchableOpacity> 
            

            <TouchableOpacity style={[styles.salesOrderBottomBtns,{
                backgroundColor:colors.second

            }]}>
            <Text style={styles.salesOrderBottomText}>
               X
               </Text>
                
                </TouchableOpacity> 
            

            
        </View>



      </View>
    </View>
  )
}

export default SalesOrder

const styles = StyleSheet.create({
    salesOrder:{
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
        backgroundColor:colors.white,
        marginTop:8

    },
    salesOrderInside:{
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
        marginVertical:universalPaddingVertical


    },
    salesOrderTop:{
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
    salesOrderTopLeft:{
        flexDirection:'row',
        marginRight:25
    },
    salesOrderTopText:{
        color:colors.white,
        fontWeight:'700'
    },
    salesOrderBitween:{
        width:'95%',
        marginLeft:'auto',
        marginRight:'auto',
        marginVertical:universalPaddingVertical

    },
    salesOrderBitweenText:{
        color:colors.black
    },
    salesOrderBottom:{
        flexDirection:'row',
        marginBottom:10

    },
    salesOrderBottomBtns:{
        // height:buttonHeight,
        // padding:universalPaddingHorizontal
        backgroundColor:colors.primarySecond,
        marginLeft:10,
        padding:7,
        width:75,
        alignItems:'center',
        borderRadius:10

    },
    salesOrderBottomText:{
        color:colors.white,
        fontWeight:'700',
        fontSize:11
    }
})