import { Stack } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

export default function GameDetail() {
  const { gameSlug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (gameSlug) {
      getGameDetails(gameSlug).then(setGameInfo);
    }
  }, [gameSlug]);
  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "The Legend of Zelda: Breath of the Wild",
          headerRight: () => {},
        }}
      />
      <Screen>
        <View>
          {gameInfo === false ? ( // TODO Cambiar false por null cuando tenga la API
            <ActivityIndicator color={"#fff"} size={"large"} />
          ) : (
            <ScrollView>
              <View className="justify-center items-center text-center">
                <Score score={97} maxScore={100} />
                <Text className="text-white text-center font-bold text-xl">
                  Detalles del juego: {gameSlug}
                </Text>
                <Image
                  className="mb-4 rounded"
                  source={{
                    uri: "https://cdna.artstation.com/p/assets/images/images/037/801/742/medium/lee-court-oot-lc-v1.jpg?1621357457",
                  }}
                  style={{ width: 214, height: 294 }}
                />
                <Text className="text-white/70 mt-4 text-ledt mb-8 text-base">
                  Descripción del juego Lorem ipsum
                </Text>
              </View>
            </ScrollView>
          )}
        </View>
      </Screen>
    </>
  );
}
