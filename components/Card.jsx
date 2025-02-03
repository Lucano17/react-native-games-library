import { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";

export function GameCard({ game }) {
  return (
    <View style={styles.card}>
      <Text style={styles.score}>Game score</Text>
      <Text style={styles.title}>Game title</Text>
      <Image
        source={{
          uri: "https://cdna.artstation.com/p/assets/images/images/037/801/742/medium/lee-court-oot-lc-v1.jpg?1621357457",
        }}
        style={styles.image}
      />
      <Text style={styles.description}>Game description</Text>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
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
