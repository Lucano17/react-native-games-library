import { Tabs } from "expo-router";
import { HomeIcon, CircleInfoIcon } from "../../components/Icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
          paddingTop: 0,
          height: 50,
        },
        tabBarActiveTintColor: "yellow",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <CircleInfoIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
