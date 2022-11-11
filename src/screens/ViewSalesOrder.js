import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { CheckBox } from 'react-native-elements'
import SalesOrder from '../common/SalesOrder'
import { colors } from '../themes/colors'
import BackButton from '../common/BackButton'

const ViewSalesOrder = ({navigation}) => {
  useLayoutEffect(()=>{

    navigation.setOptions({
      headerBackTitleVisible:false,
      headerBackVisible:false,

  
  headerLeft:()=>(
  
   <BackButton navigation={navigation}/>

   
)})
  },[])

  const [isSelected, setSelection] = useState(false);
  return (
    <SafeAreaView>
      <View>
        <TextInput 
        style={styles.viewSalesOrderInput}
        placeholder='Search Order ID / Inv No.'
        keyboardType='decimal-pad'
        />
      </View>
      <View style={styles.viewSalesOrderCheckbox}>
        <Text style={styles.viewSalesOrderCheckboxText}>Hold</Text>
        <CheckBox 
        checked={isSelected}
        onPress={()=>setSelection(!isSelected)}
        checkedColor='rgb(60, 179, 113)'
        containerStyle={{
          // backgroundColor:'rgb(60, 179, 113)',
          
        }}
        // containerStyle={styles.checkbox}
      
      
        />


      </View>

      <View>
        <SalesOrder/>
      </View>
    </SafeAreaView>
  )
}

export default ViewSalesOrder

const styles = StyleSheet.create({
  viewSalesOrderInput:{
    borderColor:'black',
    borderWidth:1,
    width:'90%',
    marginLeft:'auto',
    marginRight:"auto",
     borderRadius:10,
     marginTop:10,
     paddingLeft:25,
     backgroundColor:colors.white
  },
  viewSalesOrderCheckbox:{
    flexDirection:'row',
    // // alignContent:'centers',
    // borderWidth:1,
    // borderColor:'red',
    justifyContent:'flex-end',
    alignItems:'center',
    
  },
  viewSalesOrderCheckboxText:{
    color:colors.black,
    marginRight:-10
  },
  checkbox:{
    backgroundColor:'lightgreen',
    color:colors.second,
    // width:30

  }
})