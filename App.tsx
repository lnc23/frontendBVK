import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import RouteStack from "./src/routes/RouteStack"
import { NativeBaseProvider } from "native-base"

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RouteStack />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
