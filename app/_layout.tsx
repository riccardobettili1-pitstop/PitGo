import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ 
      headerShown: false, 
      animation: 'fade', // Effetto dissolvenza elegante
      contentStyle: { backgroundColor: '#000' } 
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="client-dashboard" />
    </Stack>
  );
}