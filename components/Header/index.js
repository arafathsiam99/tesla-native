import React from "react";
import { View, Image } from "react-native";

import styles from "./styles";
const Header = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/image/logo.png")}
      ></Image>
      <Image
        style={styles.menu}
        source={require("../../assets/image/menu.png")}
      ></Image>
    </View>
  );
};

export default Header;
