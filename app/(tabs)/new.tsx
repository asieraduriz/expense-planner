import { Button, Pressable, StyleSheet } from "react-native";
import { Text, TextInput, View } from "@/components/Themed";
import { useState } from "react";

export default () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [currency, setCurrency] = useState("");
  //TODO: Ideate frequency picker
  const [notes, setNotes] = useState("");

  return (
    <View style={styles.container}>
      <TextInput placeholder="Subscription name" value={name} onChangeText={setName} />
      <TextInput placeholder="Subscription cost + currency" keyboardType="numeric" />
      <TextInput placeholder="Frecuency picker" />
      <TextInput placeholder="Notes" />
      <Button title="Add" />
      <Pressable
        onPress={() => {
          console.log("state", {
            name,
            cost,
            currency,
            notes,
          });
        }}
      >
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
