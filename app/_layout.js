import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import SplashScreen from "expo-splash-screen";

const Layout = () => {
  const { fontsLoaded } = useFonts({
    Ubuntu_Bold: require("../assets/fonts/Ubuntu-Bold.ttf"),
    Ubuntu_Regular: require("../assets/fonts/Ubuntu-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
