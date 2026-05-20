import { Stack } from "expo-router";
import "react-native-reanimated";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function NoTabs() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProductDetails" options={{ headerShown: false }} />
      <Stack.Screen name="ViewCart" options={{ headerShown: false }} />
    </Stack>
  );
}
