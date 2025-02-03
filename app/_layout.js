import { View } from "react-native";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <View className="flex-1 bg-black pl-6 pr-6">
      <Slot />
    </View>
  );
}
