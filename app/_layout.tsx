import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import Head from 'expo-router/head'; // <--- Aggiungi questo import

export default function Layout() {
  return (
    <>
      {/* Questa parte gestisce i meta-tag invisibili per Safari */}
      <Head>
        <title>Pitgo</title>
        <link rel="apple-touch-icon" href="/ios180.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>

      {/* Questa è la tua interfaccia esistente */}
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