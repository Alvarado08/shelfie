import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <Link href="/" style={styles.link}>
        Home
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact
      </Link>
    </View>
  );
};

export default About;

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
