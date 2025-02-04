// import { useEffect, useState } from "react";
// import { getLatestGames } from "../lib/metacritic";
import { ScrollView } from "react-native";
import { AnimatedGameCard } from "./Card";
import { Screen } from "./Screen";

export function Main() {
  //   const [games, setGames] = useState([]);

  //   useEffect(() => {
  //     getLatestGames().then((games) => {
  //       setGames(games);
  //     });
  //   }, []);

  return (
    <Screen>
      <ScrollView>
        <AnimatedGameCard />
        <AnimatedGameCard />
        <AnimatedGameCard />
        <AnimatedGameCard />
        <AnimatedGameCard />
        <AnimatedGameCard />
      </ScrollView>
      {/* 
      { games.lenght === 0 ? (
      <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
        data={games}
        keyExtractor={game => game.slug}
        renderItem={({item, index}) => <GameCard game={item} index={index}/>}
        />
        )
      ))} */}
    </Screen>
  );
}
