import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PitStop</Text>
      <Text style={styles.subtitle}>Benvenuto nella tua app di prova</Text>
      <Image
        source={{ uri: "https://via.placeholder.com/150/FFFFFF/000000?text=Car" }}
        style={styles.image}
      />
    </View>
  );
}

function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore</Text>
      <Text style={styles.subtitle}>Sezione auto</Text>
      <Image
        source={{ uri: "https://via.placeholder.com/150/FFFFFF/000000?text=Garage" }}
        style={styles.image}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#000" },
          tabBarActiveTintColor: "#1E90FF",
          tabBarInactiveTintColor: "#888",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="car" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 12,
  },
});