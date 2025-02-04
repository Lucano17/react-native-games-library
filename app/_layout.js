import { View } from "react-native";
import { Stack } from "expo-router";
import { Logo } from "../components/Logo";

export default function Layout() {
  return (
    <View className="flex-1 bg-black">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <Logo />,
          // headerRight: () => (
          //   <Link asChild href="/about">
          //     <Pressable>
          //       <CircleInfoIcon />
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
    </View>
  );
}
