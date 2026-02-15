import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MODAL</Text>
      <Text style={styles.subtitle}>Notifiche e avvisi dell’app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" },
  title: { fontSize: 48, fontWeight: "bold", color: "#fff" },
  subtitle: { fontSize: 20, color: "#fff", marginTop: 10 },
});
