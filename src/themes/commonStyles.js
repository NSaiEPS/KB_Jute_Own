import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { universalPaddingHorizontal } from "./dimensions";
export const commonStyles = StyleSheet.create({
  whiteBackground: {
    flex: 1,
    backgroundColor: colors.white,
  },
  whiteBackgroundWithPadding: {
    flex: 1,
    paddingHorizontal: universalPaddingHorizontal,
    backgroundColor: colors.white,
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexDirectionRow: {
    flexDirection: "row",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  tabIcon: { height: 25, width: 25 },

  boxShadow:{
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3, 
    elevation:4,
    backgroundColor:colors.white,
    borderRadius:15,

  },
  marginHorigontalAuto:{
    marginLeft:'auto',
      marginRight:"auto",
  },
  textInput:{
    
      borderColor:colors.black,
      borderWidth:2,
      // width:'90%',
      // marginLeft:'auto',
      // marginRight:"auto",
      marginTop:5,

       borderRadius:5,
       paddingLeft:15,
       backgroundColor:colors.white,
       fontSize:17

  },
  createOrderView:{
    marginLeft:'auto',
    marginRight:'auto',
    width:'95%',
    marginTop:25

  },
  createOrderView:{
    marginLeft:'auto',
    marginRight:'auto',
    width:'95%',
    marginTop:25

  },
  createOrderViewText:{
    color:colors.black,
    fontSize:14,
    fontWeight:'700'
  },
  pickerViewStyle:{
    marginTop:7,
    borderColor:colors.black,
      borderWidth:2,
      borderRadius:5,

      // height:45
  },
  pickerStyle:{
    color:colors.black,     
    width:'100%',
    // backgroundColor:colors.second,
    // height:40

    
  },
    modelBody:{
      width:'90%',
      minHeight:600,
      backgroundColor:'white',
      padding:10,
      borderRadius:10,
      // justifyContent:'center'
  }
});
