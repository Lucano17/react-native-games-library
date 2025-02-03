import { Link } from "expo-router";
import { Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";

export default function GameDetail() {
  const { gameSlug } = useLocalSearchParams();
  return (
    <Screen>
      <Text className="text-white">Detalles del juego: {gameSlug}</Text>
      <Link href={"/"} className="text-blue-500">
        Volver atrás
      </Link>
    </Screen>
  );
}
