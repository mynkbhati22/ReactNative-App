import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { icons, SIZES } from "../../constants/theme";

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Mayank</Text>
      </View>
    </View>
  );
};

export default Welcome;
