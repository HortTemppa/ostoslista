import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState();

  const handleItemChange = (item) => {
    setNewItem(item);
  };

  const handleAdd = () => {
    setList([...list, { item: { item }, key: list.length + 1 }]);
  };

  return (
    <View style={styles.container}>
      <TextInput onChange={handleItemChange} value={newItem} />
      <Button onPress={handleAdd} title="Add Item" />
      <Button onPress={handleClear} title="Clear shopping list" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
