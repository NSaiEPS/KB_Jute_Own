import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Box from '../common/Box'
import { Constants } from  '../helpers/Constants';
import { useSelector } from 'react-redux'
import { SelectreportSelected } from '../Redux/slice/reportSlice/ReportSlice'
import ReportBox from '../common/ReportBox'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import BackButton from '../common/BackButton';


const ReportTypes = ({navigation,route}) => {
    useLayoutEffect(()=>{

        navigation.setOptions({
          headerBackTitleVisible:false,
          headerBackVisible:false,
    
      
      headerLeft:()=>(
        <BackButton navigation={navigation}/>
    )})
      },[])




   
  
  
  
   const reportSelected = useSelector((state) => state?.reduxstore?.reportReducer?.reportSelect)

const [data, setdat] = useState([])
 useEffect(()=>{
  
    if(reportSelected==='Labour_Report'){
        setdat(Constants.ReportTypeBox.Labour_Report)
    }
    if(reportSelected==='Payment_Report'){
        setdat(Constants.ReportTypeBox.Payment_Report)
    }
    if(reportSelected==='Dispatch_Report'){
        setdat(Constants.ReportTypeBox.Dispatch_Report)
    }
    if(reportSelected==='Purchase_Report'){
        setdat(Constants.ReportTypeBox.Purchase_Report)
    }
    if(reportSelected==='Sale_Report'){
        setdat(Constants.ReportTypeBox.Sale_Report)
    }
    if(reportSelected==='Stock_Report'){
        setdat(Constants.ReportTypeBox.Stock_Report)
    }


 },[reportSelected])
  
  return (
  
  
    <SafeAreaView style={styles.reportTypePaage}>

        <View style={styles.reportTypePaageInside}>
        
        <FlatList
        contentContainerStyle={{
            display:'flex',
         
        height:550,
       
        justifyContent:"center",
        // alignSelf:'center'
        // alignContent:'space-around'
        // alignContent:'space-between'
        alignItems:'center'
        
       

            
            }}
           data={data}
           numColumns={2}
           scrollEnabled={true}
        
           renderItem={({item,index})=>{
            // console.log(item,'item')
           return(
            <ReportBox 
            navigation={navigation}
            name={item}
            navigateTo={item}
            index={index}
            length={Constants.data?.length}


            
            />

      
)}}/>


        </View>


  </SafeAreaView>
//   </AppSafeAreaView>
  )
}

export default ReportTypes

const styles = StyleSheet.create({
    reportTypePaage:{
        flex:1,
        alignItems:'center',
        // justifyContent:'center',
        // backgroundColor:'white',
        
    },
    reportTypePaageInside:{
        // flexDirection:'row',
        // flexWrap:'wrap',
        // justifyContent:"center",
        // alignContent:'center',
        // // borderColor:'red',
        // // borderWidth:1,
        // height:450,
        // // maxHeight:500,
        // marginTop:75,
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
    reportTypePaageInsideView:{
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
    reportTypePaageInsideViewInsideText:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    reportTypePaageInsideViewText:{
        color:'black'
    }
})