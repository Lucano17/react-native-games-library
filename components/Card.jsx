import { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import { Score } from "./Score";

export function GameCard({ game }) {
  return (
    <View className="bg-slate-700 p-4 rounded-xl gap-4 mb-10 flex flex-row">
      <Image
        source={{
          uri: "https://cdna.artstation.com/p/assets/images/images/037/801/742/medium/lee-court-oot-lc-v1.jpg?1621357457",
        }}
        style={styles.image}
      />
      <View>
        <View className="flex flex-row items-center gap-2">
          <Score />
          <Text style={styles.title}>Game title</Text>
        </View>
        <Text className="text-white mt-5">Game description</Text>
      </View>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 107,
    height: 140,
    borderRadius: 10,
  },
  card: {
    marginBottom: 42,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#fff",
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
});
