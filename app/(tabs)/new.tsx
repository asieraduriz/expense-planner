import { Button, Pressable, StyleSheet } from "react-native";
import { Text, TextInput, View } from "@/components/Themed";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

export default () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [currency, setCurrency] = useState("");
  //TODO: Ideate frequency picker
  const [notes, setNotes] = useState("");

  return (
    <View style={styles.container}>
      <TextInput placeholder="Subscription name" value={name} onChangeText={setName} />
      <TextInput placeholder="Subscription cost" keyboardType="numeric" value={cost} onChangeText={setCost} />
      <Picker selectedValue={currency} onValueChange={setCurrency} style={{ width: 150 }}>
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="EUR" value="EUR" />
        <Picker.Item label="GBP" value="GBP" />
      </Picker>
      <TextInput placeholder="Frecuency picker" />
      <TextInput placeholder="Notes" value={notes} onChangeText={setNotes} />
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
