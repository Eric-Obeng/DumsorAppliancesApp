import { FlatList, View, Text } from "react-native";

const EnergySaver = [
  { name: "US Fridge 200 L", volts: "500 W", price: "$250.95" },
];

const Listcard = () => {
  return (
    <FlatList
      data={Products}
      renderItem={({ item }) => (
        <View>
          <Text>{item}</Text>
        </View>
      )}
    />
  );
};

export default Listcard;
