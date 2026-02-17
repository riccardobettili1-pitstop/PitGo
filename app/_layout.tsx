import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import Head from 'expo-router/head';

export default function Layout() {
  return (
    <>
      <Head>
        <title>PitGo</title>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#000' },
          tabBarActiveTintColor: '#1E90FF',
          tabBarInactiveTintColor: '#888',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="car" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="modal"
          options={{
            title: 'Modal',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="alert-circle" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}