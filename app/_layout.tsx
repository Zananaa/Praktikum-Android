import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="riwayat" options={{ title: "Riwayat" }}/>
      <Stack.Screen name="scan" options={{ title: "Scan" }}/>
      <Stack.Screen name="dompet" options={{ title: "Dompet" }}/>
      <Stack.Screen name="profil" options={{ title: "Profil" }}/>
    </Stack>
  );
}
