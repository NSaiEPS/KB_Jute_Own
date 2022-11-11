import { FlatList, StatusBar, StyleSheet, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Box from '../common/Box'
import { Constants } from  '../helpers/Constants';
// import { AppSafeAreaViewProps } from '../types/common'
import { colors } from '../themes/colors';

const HomePage = ({navigation}) => {
    useLayoutEffect(()=>{
  
  navigation.setOptions({
    headerBackTitleVisible:false,
    headerBackVisible:false,})},[])


    

    
  return (
    // <AppSafeAreaView >
  
    <SafeAreaView style={styles.homePage}>
         {
            Platform.OS !== "ios" &&
         <StatusBar
        translucent={false}
        backgroundColor={ colors.primary}
        barStyle={"dark-content"}
        // barStyle={statusColor ? "light-content" : "dark-content"}
      />}

        <View style={styles.homePageInside}>
        
        <FlatList
        contentContainerStyle={{
         
        // // height:550,
      
        // // justifyContent: 'center',
        // // alignContent:'center'
// backgroundColor:'pink',
// flexGrow:1
            
            }}
           data={Constants.HomePageBox}
           numColumns={2}
           scrollEnabled={true}
        //    horizontal={true}
           renderItem={({item,index})=>{
         
           return(
         
            <Box 
            navigation={navigation}
            name={item.name}
            navigateTo={item.goto}
            index={index}
            length={Constants.HomePageBox.length}

            
            />
          

      
)}}/>


        </View>


  </SafeAreaView>
// </AppSafeAreaView>
  )
}

// let a=[1,2,3]
// let b=[4,5,6]
// let c=a.concat(b).join('')
// console.log(c)
export default HomePage

const styles = StyleSheet.create({
    homePage:{
        flex:1,
        alignItems:'center',
        // justifyContent:'center',
        // backgroundColor:'white',
        
    },
    homePageInside:{
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
    homePageInsideView:{
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
    homePageInsideViewInsideText:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    homePageInsideViewText:{
        color:'black'
    }
})