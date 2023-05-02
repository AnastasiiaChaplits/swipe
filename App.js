import { StyleSheet, View, Text, Image } from "react-native";
import { Card, Button } from "react-native-elements";
import Deck from "./src/components/Deck";
import { DATA } from "./src/mockData";

export default function App() {
  return (
    <View style={styles.container}>
      <Deck>
        {DATA.map((card) => (
          <Card key={card.id}>
            <Image style={styles.image} source={{ uri: card.uri }} />
            <Text style={styles.text}>{card.text}</Text>
            <Button
              icon={{ name: "code" }}
              backgroundColor="03A9F4"
              title="View now"
            />
          </Card>
        ))}
      </Deck>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    marginBottom: 10,
  },
  image: {
    height: 100,
    marginBottom: 10,
  },
});
