import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#25292e",
        tabBarInactiveTintColor: "#fff",
        headerStyle: {
          height: 1,
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#007bff",
          borderRadius: 20,
          margin: 10,
          height: 70,
          position: "absolute",
          left: 20,
          right: 20,
          bottom: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={31}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="riwayat"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "receipt" : "receipt-outline"}
              color={color}
              size={31}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "qr-code" : "qr-code-outline"}
              color={color}
              size={60}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="dompet"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "wallet" : "wallet-outline"}
              color={color}
              size={31}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person-circle" : "person-circle-outline"}
              color={color}
              size={31}
            />
          ),
        }}
      />
    </Tabs>
  );
}
