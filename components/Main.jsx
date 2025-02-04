import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { AnimatedGameCard } from "./Card";
import { Screen } from "./Screen";
import { fetchGames } from "../lib/giantbomb";

export function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <Screen>
      {Array.isArray(games) && games.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug || game.id.toString()}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}
