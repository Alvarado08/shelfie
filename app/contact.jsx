import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>
      <Link href="/" style={styles.link}>
        Home
      </Link>
      <Link href="/about" style={styles.link}>
        About
      </Link>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
