import { Stack } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { fetchGameDetails } from "../lib/giantbomb";

export default function GameDetail() {
  const { gameSlug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (gameSlug) {
      fetchGameDetails(gameSlug).then((data) => {
        console.log("Datos obtenidos:", data);
        setGameInfo(data);
      });
    }
  }, [gameSlug]);

  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: gameInfo ? gameInfo.title : "Cargando...",
          headerRight: () => {},
        }}
      />
      <Screen>
        <View>
          {gameInfo === null ? (
            <ActivityIndicator color={"#fff"} size={"large"} />
          ) : (
            <ScrollView>
              <View className="justify-center items-center text-center">
                <Text className="text-white text-center font-bold text-xl">
                  {gameInfo.title}
                </Text>
                <Image
                  className="mb-4 rounded"
                  source={{ uri: gameInfo.image }}
                  style={{ width: 214, height: 294 }}
                />
                <Text className="text-white/70 mt-4 text-ledt mb-8 text-base">
                  {gameInfo.description}
                </Text>
              </View>
            </ScrollView>
          )}
        </View>
      </Screen>
    </>
  );
}
