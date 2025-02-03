import { View } from "react-native";
// import { useEffect, useState } from "react";
// import { getLatestGames } from "../lib/metacritic";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard } from "./Card";

export function Main() {
  const insets = useSafeAreaInsets();
  //   const [games, setGames] = useState([]);

  //   useEffect(() => {
  //     getLatestGames().then((games) => {
  //       setGames(games);
  //     });
  //   }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <ScrollView>
        <GameCard />
      </ScrollView>
      {/* 
      { games.lenght === 0 ? (
      <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
       games.map((game) => (
        <ScrollView>
          <Text>{game.slug}</Text>
          <Text>{game.score}</Text>
          <Image
            source={{ uri: game.image }}
            style={styles.image}
          />
          <Text>{game.description}</Text>
        </ScrollView>
        )
      ))} */}

      {/* <Pressable
        onPress={() => {}}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 265)" : "white",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={{ fontSize: pressed ? 32 : 16 }}>
            {pressed ? "Pressed!" : "Press me"}
          </Text>
        )}
      </Pressable> */}
    </View>
  );
}
