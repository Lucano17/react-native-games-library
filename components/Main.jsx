import { Pressable, View } from "react-native";
import { Link } from "expo-router";
// import { useEffect, useState } from "react";
// import { getLatestGames } from "../lib/metacritic";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./Card";
import { Logo } from "./Logo";
import { CircleInfoIcon } from "./Icons";

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
      <View style={{ marginBottom: 20 }}>
        <Logo />
      </View>
      <Link href={"/about"} asChild>
        <Pressable>
          {({ pressed }) => (
            <CircleInfoIcon
              style={{
                opacity: pressed ? 0.5 : 1,
                color: pressed ? "blue" : "white", //arreglar o hacer con tailwind import styled StyledPressable = styled(Pressale) y cambiar el componente Pressable por el nuevo y poner active:opacity & opacity:text-color
              }}
            />
          )}
        </Pressable>
      </Link>
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
