import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  TextInput,
  View,
  Pressable,
} from "react-native";

export default function App() {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState();

  const handleItemChange = (item) => {
    setNewItem(item);
  };

  const handleClear = () => {
    setList([]);
  };

  const handleAdd = () => {
    setList((list) => [...list, { item: newItem, key: list.length + 1 }]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleItemChange}
        value={newItem}
      />
      <Pressable style={styles.button} onPress={handleAdd}>
        <Text style={styles.text}>Add Item</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleClear}>
        <Text style={styles.text}>Clear shopping list</Text>
      </Pressable>
      <FlatList
        data={list}
        renderItem={({ listItem }) => <Text>{listItem.item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 150,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    width: 180,
    height: 30,
  },
  button: {
    alignItems: "center",
    padding: 5,
    margin: 20,
    backgroundColor: "lightblue",
    width: 150,
    height: "auto",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
  },
  text: {
    fontWeight: "bold",
  },
});
