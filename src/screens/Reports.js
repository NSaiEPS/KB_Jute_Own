

import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Box from '../common/Box'
import { Constants } from  '../helpers/Constants';
// import { AppSafeAreaViewProps } from '../types/common'
// import { AppSafeAreaView } from '../common'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import BackButton from '../common/BackButton';

const Reports = ({navigation}) => {
    useLayoutEffect(()=>{

        navigation.setOptions({
          headerBackTitleVisible:false,
          headerBackVisible:false,
    
      
      headerLeft:()=>(
        <BackButton navigation={navigation}/>
    )})
      },[])
   

    
  return (
    // <AppSafeAreaView >
  
    <SafeAreaView style={styles.reports}>

        <View style={styles.reportsInside}>
        
        <FlatList
        contentContainerStyle={{
           
            // alignSelf:"center",
            // alignContent:'center',
            // justifyContent:"center",
        height:600,
        // alignItems:'center'
        // justifyContent:'space-evenly'

            
            }}
           data={Constants.ReportPageBox}
           numColumns={2}
           scrollEnabled={true}
        //    horizontal={true}
           renderItem={({item,index})=>{
            // console.log(item)
           return(
            <Box 
            
            navigation={navigation}
            name={item.name}
            navigateTo={item.goto}
            dispatching={true}
            index={index}
            length={Constants.ReportPageBox.length}


            
            />

      
)}}/>


        </View>


  </SafeAreaView>
//   </AppSafeAreaView>
  )
}

export default Reports

const styles = StyleSheet.create({
    reports:{
        flex:1,
        alignItems:'center',
        // justifyContent:'center',
        // backgroundColor:'white',
        
    },
    reportsInside:{
        // flexDirection:'row',
        // flexWrap:'wrap',
        // justifyContent:'space-around',
        // // alignContent:'space-around',
        // // borderColor:'red',
        // // borderWidth:1,
        // height:450,
        // // maxHeight:500,
        // marginTop:50,
        // overflow:'scroll',
        // display:'flex',
        // flexGrow:1
        flexDirection:'row',
        // flexWrap:'wrap',
        

      
        // height:450,
  
        // marginTop:55,
        // overflow:'scroll',
        // display:'flex',
        flexGrow:1,
        alignItems:'center',
        // width:'100%',
        // backgroundColor:'red',
        flex:1,
        marginHorizontal:20
        

    },
    reportsInsideView:{
        height:145,
        width:175,
        marginTop:25,

        
        borderRadius:1,
        // shadowColor: '#000000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,  
        // elevation: 3

        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3, 
        elevation:1,
        
        
    },
    reportsInsideViewInsideText:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    reportsInsideViewText:{
        color:'black'
    }
})