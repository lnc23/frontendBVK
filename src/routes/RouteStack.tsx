import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { FunctionComponent } from "react"
import { Home } from "../screen/Home"
import { SeeMoreListCat } from "../screen/SeeMoreListCat"

export type StackParamList = {
  Home: undefined
  SeeMoreListCat: undefined
}

const Stack = createNativeStackNavigator<StackParamList>()

const RouteStack: FunctionComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleStyle: {
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#191919",
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="SeeMoreListCat"
        component={SeeMoreListCat}
        options={{
          headerTintColor: "white",
          headerTitleStyle: {
            color: "white",
          },
          headerTitle: "More List Cat",
          headerStyle: {
            backgroundColor: "#191919",
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  )
}

export default RouteStack
