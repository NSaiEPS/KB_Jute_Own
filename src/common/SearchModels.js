import { FlatList, Keyboard, KeyboardAvoidingView, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { commonStyles } from '../themes/commonStyles'
import DropdownIcon from 'react-native-vector-icons/Fontisto';
import ModelFlatList from './ModelFlatList';
import { Constants } from '../helpers/Constants';


const SearchModels = ({modelopen,setModelOpen,finalSearch,setfinalSearch,animationType,searchType,extraStyles}) => {

  const [searchinput, setSearchinput] = useState('')
  const [searchData, setsearchData] = useState([])
  const [keyBoardOpened, setkeyBoardOpened] = useState(false)


  useEffect(()=>{
    if(searchType==='Select Product'){
      let reqData=Constants.createSaleOrder.SearchProduct;
      setsearchData(reqData)
  
    }

     Keyboard.addListener(
      'keyboardDidShow',
      () => {
          setkeyBoardOpened(true);
      },
  );
  Keyboard.addListener(
      'keyboardDidHide',
      () => {
          setkeyBoardOpened(false);
      },
  );
  },[])



  return (
    <View style={styles.searchModels}>
      <Modal
          visible={modelopen}
          transparent
   
          animationType={animationType}
        
          hardwareAccelerated
          onRequestClose={()=>{
            setModelOpen(false)
            

          }}
        >
          <TouchableOpacity style={styles.centered_view}
          activeOpacity={1}
          onPress={()=>{
            setModelOpen(true)
            // alert("clicked")

          }}
          >
            <KeyboardAvoidingView
            // behavior='position'
             style={[{...commonStyles.modelBody, 
             
             
             minHeight:keyBoardOpened?450:600, 
             maxHeight:keyBoardOpened?450:600
             ,overflow:'hidden'}]}>


            
           <View>
           <TextInput
         style={[{...commonStyles.textInput, }]}
          // placeholder='sakjfeygwsj'
          placeholder={searchType}
          value={searchinput}
          onChangeText={(text)=>{
            setSearchinput(text)
          }}
        />
        {
          searchinput &&
        
        <View style={styles.dropdownIconView}>
          <DropdownIcon 
          onPress={()=>{
            setSearchinput('')
            
          }}
          name='close-a'
          size={15}
          color="gray"
          />
        </View>}
           </View>
           <View 
           style={{overflow:'scroll'}}
           >
           <FlatList
        contentContainerStyle={{
        //  height:
        //  maxHeight:keyBoardOpened?300:600,
        //  overflow:'scroll'
        // height:300
        // overflow:'scroll'
   
            }}
           data={searchData}
         
           scrollEnabled={true}
           keyExtractor={item => item}
           
       
           renderItem={({item,index,})=>{
            if( item.includes(searchinput))
        
           return(
            <ModelFlatList 
          
            name={item}
            extraStyles={extraStyles}
            setfinalSearch={setfinalSearch}
            setSearchinput={setSearchinput}
            index={index}
            length={searchData.length}
            
            />
            )
            
            
            }}
            
       
            />
            
            
            {/* <ModelFlatList searchType={searchType} extraStyles={extraStyles}/> */}

            
           </View>
           </KeyboardAvoidingView>

            
          </TouchableOpacity>
        </Modal>
    </View>
  )
}

export default SearchModels

const styles = StyleSheet.create({
    centered_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099',
        // width:'90%'
      },
      dropdownIconView:{
        position:'absolute',
        right:19,
        top:25
      },
   
     
})