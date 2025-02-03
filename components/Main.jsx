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
        <FlatList
        data={games}
        keyExtractor={game => game.slug}
        renderItem={({item}) => <GameCard game={item} />}
        />
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
