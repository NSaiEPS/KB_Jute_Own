
 import React from 'react';

 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import LoginScreen from './screens/LoginScreen';
//  import LoginScreen from './screens/LoginScreen';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import HomePage from './screens/HomePage';
 import CreateSaleOrder from './screens/CreateSaleOrder';
 import ViewSalesOrder from './screens/ViewSalesOrder';
 import CreatePurchaceOrder from './screens/CreatePurchaceOrder';
 import ViewPurchaseOrder from './screens/ViewPurchaseOrder';
 import Reports from './screens/Reports';
 import { SafeAreaProvider } from 'react-native-safe-area-context';
import ReportTypes from './screens/ReportTypes';
import { Provider } from 'react-redux';
import { Store } from './Redux/store/store';
import StockPosition from './screens/ReportTypes/StockReport/StockPosition';
import ProductPartyWise from './screens/ReportTypes/SaleReport/ProductPartyWise';
import PartyProductWise from './screens/ReportTypes/SaleReport/PartyProductWise';
import SaleRigister from './screens/ReportTypes/SaleReport/SaleRigister';
import ProductPartyWisePurchase from './screens/ReportTypes/PurchaceReport/ProductPartyWisePurchase';
import PartyProductWisePurchase from './screens/ReportTypes/PurchaceReport/PartyProductWisePurchase';
import PurchaseRegisterPurchase from './screens/ReportTypes/PurchaceReport/PurchaseRegisterPurchase';
import PendingDispatch from './screens/ReportTypes/DispatchReport/PendingDispatch';
import DispatchRegister from './screens/ReportTypes/DispatchReport/DispatchRegister';
import OutStandingPyment from './screens/ReportTypes/PaymentReport/OutStandingPyment';
import LabourCharges from './screens/ReportTypes/LabourReport/LabourCharges';
import PartyWisePaymentStatement from './screens/ReportTypes/PaymentReport/PartyWisePaymentStatement';
import { colors } from './themes/colors';
 
 // Have to install
 
 // Picker
 // native elements
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   const Stack = createNativeStackNavigator();
 
 
   // const Stack = createNativeStackNavigator({
   //   defaultNavigationOptions: {
       
   //     headerTitleAlign: 'center',}
 
   
   // });
 
 
 
 
   const globalScreenOptions={
     headerStyle:{
       backgroundColor:colors.primarySecond},
       headerTitleStyle:{
         color:'white',
         fontWeight:'700'
         
       },
       headerTintColor:"white",
       
     }
   
   
   
   
   
     return (
      <Provider  store={Store} >
        <SafeAreaProvider>
       <NavigationContainer>
   
   <Stack.Navigator screenOptions={globalScreenOptions}>
           <Stack.Screen 
           name="Login" component={LoginScreen} />
   
          <Stack.Screen 
           options={{ title:"KB SULTI",headerTitleAlign:'center'}}
           name="Home" component={HomePage} />
 
 
          <Stack.Screen 
           options={{ title:"Create Sale Order",headerTitleAlign:'center'}}
           name="CreateSaleOrder" component={CreateSaleOrder} />
 
           <Stack.Screen 
           options={{ title:"Sales Order",headerTitleAlign:'center'}}
           name="ViewSalesOrder" component={ViewSalesOrder} />
 
           <Stack.Screen 
           options={{ title:"Create Purchase Order",headerTitleAlign:'center'}}
           name="CreatePurchaceOrder" component={CreatePurchaceOrder} />
   
           <Stack.Screen 
           options={{ title:"Purchase Order",headerTitleAlign:'center'}}
           name="ViewPurchaseOrder" component={ViewPurchaseOrder} />
 
           <Stack.Screen 
           options={{ title:"Reports",headerTitleAlign:'center'}}
           name="Reports" component={Reports} /> 
            <Stack.Screen 
           options={{ title:"Report Type",headerTitleAlign:'center'}}
           name="ReportTypes" component={ReportTypes} /> 

            <Stack.Screen 
           options={{ title:"Stock Position",headerTitleAlign:'center'}}
           name="Stock Position" component={StockPosition} /> 

            <Stack.Screen 
           options={{ title:"Product Party Wise",headerTitleAlign:'center'}}
           name="Product Party Wise" component={ProductPartyWise} />
               <Stack.Screen 
           options={{ title:"Party Product Wise",headerTitleAlign:'center'}}
           name="Party Product Wise" component={PartyProductWise} />
                <Stack.Screen 
           options={{ title:"Sale Rigister",headerTitleAlign:'center'}}
           name="Sale Register" component={SaleRigister} />

          <Stack.Screen 
           options={{ title:"Product Party Wise",headerTitleAlign:'center'}}
           name="Product Party Wise Purchase" component={ProductPartyWisePurchase} />
               <Stack.Screen 
           options={{ title:"Party Product Wise",headerTitleAlign:'center'}}
           name="Party Product Wise Purchase" component={PartyProductWisePurchase} />
                <Stack.Screen 
           options={{ title:"Purchase Register",headerTitleAlign:'center'}}
           name="Purchase Register Purchase" component={PurchaseRegisterPurchase} />

          <Stack.Screen 
           options={{ title:"Pending Dispatch",headerTitleAlign:'center'}}
           name="Pending Dispatch" component={PendingDispatch} />
           
           <Stack.Screen 
           options={{ title:"Dispatch Register",headerTitleAlign:'center'}}
           name="Dispatch Register" component={DispatchRegister} />

         <Stack.Screen 
           options={{ title:"Outstanding Paymant",headerTitleAlign:'center'}}
           name="Outstanding Paymant" component={OutStandingPyment} />

          <Stack.Screen 
           options={{ title:"Party wise Pyment",headerTitleAlign:'center'}}
           name="Party wise payment Statement" component={PartyWisePaymentStatement} />

           <Stack.Screen 
           options={{ title:"Labour Charges",headerTitleAlign:'center'}}
           name="Labour Charges" component={LabourCharges} />
           
         </Stack.Navigator>
       
       
       </NavigationContainer>
       </SafeAreaProvider>
       </Provider>
     );
   }
   
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;