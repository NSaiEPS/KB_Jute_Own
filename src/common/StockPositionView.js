import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StockPositionView = ({index,name,quantity}) => {
  return (
    <View style={styles.stockPositionView}>
        <View style={styles.stockPositionViewBody}>

        <View style={{width:'10%'}}>
            <Text>{index ? index :'1'}</Text>
        </View>
        <View style={{width:'33%'}}>

            <Text style={{alignSelf:'flex-end'}}>
              {name ? name :'1rfdgrdg'}</Text>
        </View>
        <View style={{width:'35%'}}>
        <Text style={{alignSelf:'flex-end', marginRight:10}}>
              {quantity ? quantity :'0'}</Text>
        </View>
      </View>
    </View>
  )
}

export default StockPositionView

const styles = StyleSheet.create({
  stockPositionView:{
    borderBottomColor:'gray',
    borderBottomWidth:0.2
  },
  stockPositionViewBody:{
    flexDirection:'row',
    width:'70%',
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent:'space-between',
    marginTop:15,
    height:40
  }
})