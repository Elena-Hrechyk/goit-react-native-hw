import { View } from "react-native";
import styles from "./TabBarIconWrapper-styled";

const TabBarIconWrapper = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default TabBarIconWrapper;
