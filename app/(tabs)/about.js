import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { Screen } from "../../components/Screen";

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Text className="text-white">Acerca de esta App</Text>
        <Text className="text-white mt-5">
          Muy buenas! Mi nombre es{" "}
          <Text className="font-bold text-yellow-200">Lucas de la Fuente</Text>,
          soy un{" "}
          <Text className="font-bold text-yellow-200">
            desarrollador Full-stack
          </Text>{" "}
          y este es un proyecto de prueba, donde aplico mis conocimientos en{" "}
          <Text className="font-bold text-yellow-200">desarrollo mobile</Text>.
          Esta aplicación está hecha con{" "}
          <Text className="font-bold text-yellow-200">React Native (Expo)</Text>
          .
        </Text>
        <Text className="text-white mt-5">
          En esta aplicación estoy haciendo un{" "}
          <Text className="font-bold text-yellow-200">fetch de datos</Text> a la{" "}
          <Text className="font-bold text-yellow-200">API</Text> de{" "}
          <Text className="font-bold text-yellow-200">Giant Bomb</Text>, de la
          cual recupero una gran lista con más de{" "}
          <Text className="font-bold text-yellow-200">100 videojuegos</Text>, y
          el detalle de cada uno, como imágenes, descripción, y tengo pensado
          agregar más a medida de que la app crezca.
        </Text>
        <Text className="text-white mt-5">
          En esta aplicación, aunque su enfoque sea simple, iré aplicando las
          diferentes cosas que vaya aprendiendo acerca de React Native.
        </Text>
        <Text className="text-white mt-5">
          Mi propósito es ir aprendiendo cada vez más acerca del desarrollo
          mobile, siempre tratando de innovar y crear aplicaciones que sean
          útiles, visualmente atractivas, y que den una gran experiencia a los
          usuarios.
        </Text>
      </ScrollView>
    </Screen>
  );
}
