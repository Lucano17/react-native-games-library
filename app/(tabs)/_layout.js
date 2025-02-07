import { Tabs } from "expo-router";
import { HomeIcon, CircleInfoIcon } from "../../components/Icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          height: 70,
          backgroundColor: "black",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderRightWidth: 2,
          borderLeftWidth: 2,
          borderTopWidth: 2,
          borderColor: "white",
          overflow: "hidden",
        },
        tabBarActiveTintColor: "yellow",
        animation: "shift",
        tabBarIconStyle: {
          flex: 1,
          top: 5,
          width: 50,
          height: 50,
          backgroundColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <HomeIcon color={color} size={40} />,
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <CircleInfoIcon color={color} size={40} />,
          tabBarLabel: "",
        }}
      />
    </Tabs>
  );
}
