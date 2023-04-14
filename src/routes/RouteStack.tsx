import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { FunctionComponent } from "react"
import { Home } from "../screen/Home"

export type StackParamList = {
  Home: undefined
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
    </Stack.Navigator>
  )
}

//TODO: implement Auth flow (private & public page)

export default RouteStack
