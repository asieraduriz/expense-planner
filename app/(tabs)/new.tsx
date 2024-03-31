import { Button, Pressable, StyleSheet } from "react-native";
import { Text, TextInput, View } from "@/components/Themed";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Currencies, Subscription } from "@/types";

export default () => {
  const [name, setName] = useState<Subscription["name"]>("");
  const [cost, setCost] = useState<Subscription["cost"]>("");
  const [currency, setCurrency] = useState<Subscription["currency"]>();
  //TODO: Ideate frequency picker
  const [notes, setNotes] = useState<Subscription["notes"]>("");

  return (
    <View style={styles.container}>
      <TextInput placeholder="Subscription name" value={name} onChangeText={setName} />
      <TextInput placeholder="Subscription cost" keyboardType="numeric" value={cost} onChangeText={setCost} />
      <Picker selectedValue={currency} onValueChange={setCurrency} style={{ width: 150 }}>
        {
          Currencies.map(({ name, sign }) =>
            <Picker.Item label={sign} value={name} key={name} />
          )
        }
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
