import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { Screen } from "../../components/Screen";

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Text className="text-white">Acerca de esta App</Text>
        <Text className="text-white">
          Muy buenas! Mi nombre es Lucas de la Fuente, soy un desarrollador
          Full-stack y esta es una aplicación de prueba, donde aplico mis
          conocimientos en desarrollo mobile. Esta aplicación está hecha con
          React Native (expo).
        </Text>
      </ScrollView>
    </Screen>
  );
}
