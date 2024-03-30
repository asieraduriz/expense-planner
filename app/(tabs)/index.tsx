import { Button, Pressable, StyleSheet } from "react-native";
import { Text, TextInput, View } from "@/components/Themed";

export default () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Subscription name" />
      <TextInput placeholder="Subscription cost + currency" />
      <TextInput placeholder="Frecuency picker" />
      <TextInput placeholder="Notes" />
      <Button title="Add" />
      <Pressable>
        <Text>Add</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
