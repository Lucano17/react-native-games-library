import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function GameDetail() {
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-white">Detalles del juego: {id}</Text>
      <Link href={"/"} className="text-blue-500">
        Volver atrás
      </Link>
    </View>
  );
}
