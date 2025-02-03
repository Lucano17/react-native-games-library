import { View, Text } from "react-native";

export function Score({ score, maxScore }) {
  score = 97;

  const getColors = () => {
    const percentage = (score / maxScore) * 100;
    if (percentage < 90) return "bg-green-700";
    if (percentage < 99) return "bg-green-600";
    return "bg-green-500";
  };

  const className = getColors();
  return (
    <View
      className={`${className} bg-gree w-8 h-8 rounded-full justify-center items-center`}
    >
      <Text className={`text-lg font-bold text-white`}>{score}</Text>
    </View>
  );
}
