import { Stack } from "expo-router";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL, {
  unsavedChangesWarning: false,
});

const Layout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <ConvexProvider client={convex}>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
        initialRouteName="index"
      >
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen name="contact" options={{ title: "Contact" }} />
      </Stack>
    </ConvexProvider>
  );
};

export default Layout;

const styles = StyleSheet.create({});
