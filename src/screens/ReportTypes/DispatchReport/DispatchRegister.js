import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import DispatchReportView from '../../../common/DispatchReportView'
import BackButton from '../../../common/BackButton'




const DispatchRegister = ({navigation}) => {
useLayoutEffect(()=>{

  navigation.setOptions({
    headerBackTitleVisible:false,
    headerBackVisible:false,


headerLeft:()=>(
  <BackButton navigation={navigation}/>

)})
},[])

  return (
    <SafeAreaView>
      <DispatchReportView type={'Dispatch'}/>
    </SafeAreaView>
  )
}

export default DispatchRegister

const styles = StyleSheet.create({})