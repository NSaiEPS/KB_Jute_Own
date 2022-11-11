import React from "react";
import { Platform, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../themes/colors";
import { AppSafeAreaViewProps } from "../types/common";

const AppSafeAreaView = (data) => {
    const { children,style,statusColor,}=data
  return Platform.OS === "ios" ? (
    <View >
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: statusColor ? statusColor : colors.white,
        }}
      />
 
    </View>
  ) : (
    <View >
      <StatusBar
        translucent={false}
        backgroundColor={statusColor ? colors.primarySecond : colors.white}
        barStyle={statusColor ? "light-content" : "dark-content"}
      />
      {/* {children} */}
    </View>
  );
};

export { AppSafeAreaView };
