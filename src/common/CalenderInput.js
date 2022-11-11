import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { commonStyles } from '../themes/commonStyles'
import DateIcon from './DateIcon'
import DateTimePickerModal from "react-native-modal-datetime-picker";
// import { Button } from 'react-native-elements';

const CalenderInput = ({dateVal, setDateVal, placeholder,extraStyles}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
    // alert("Clicked")
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    let stringDate=(JSON.stringify(date))
    let originalRequiredDate=JSON.parse(stringDate).split('T')[0];
    
    setDateVal(originalRequiredDate)
    // console.log("A date has been picked: ", stringDate.split('T')[0]);
  // console.log( originalRequiredDate, 'final')

    hideDatePicker();

  };
  return (
    <View>
    {/* <TextInput
     style={[{...commonStyles.textInput,...extraStyles}]}
      placeholder={placeholder}
      value={dateVal}
      keyboardType='decimal-pad'
      onChangeText={(text)=>{
        setDateVal(text)
      }}
      onPressIn={showDatePicker}
    /> */}

    <TouchableOpacity style={[ styles.calenderInputStyles,{...commonStyles.textInput,...extraStyles, }]} 
    onPressIn={showDatePicker}>
      <Text style={{justifyContent:'center', marginTop:7, fontSize:17}}>
        {dateVal? dateVal: placeholder}
      </Text>

    <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        // date={(new Date())}
      />


    <DateIcon />
    </TouchableOpacity>

  </View>)


}

export default CalenderInput

const styles = StyleSheet.create({
  calenderInputStyles:{
    height:45
  }
})