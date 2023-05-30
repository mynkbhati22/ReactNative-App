import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/Header/ScreenHeaderBtn";
import Welcome from "../components/welcome/Welcome";
import Popular from "../components/popularjobs/Popular";
import Nearbyjobs from "../components/nearbyjobs/Nearbyjobs";
import BottomSiderBar from "../components/bottomNav/BottomSiderbar";
import Tabs from "../components/Tabs";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Tabs />
      {/* <BottomSiderBar /> */}
      {/* <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        Use the `Screen` component to configure the layout.
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            ),
            headerTitle: "",
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, padding: SIZES.medium }}>
            <Welcome />
            <Popular />
            <Nearbyjobs />
          </View>
        </ScrollView>
      </SafeAreaView> */}
    </>
  );
};

export default Home;
