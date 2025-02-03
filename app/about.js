import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";

export default function About() {
  return (
    <ScrollView className="pt-24">
      <Link href={"/"} asChild>
        <Pressable>
          <FontAwesome name="home" size={45} color="white" />
        </Pressable>
      </Link>
      <Text className="text-white">About</Text>
      <Text className="text-white">Lorem ipsum dolor sit amte</Text>
    </ScrollView>
  );
}
