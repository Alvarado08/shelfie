import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
// import ThemedButton from "../components/ThemedButton";

// import { api } from "../convex/_generated/api";
// import { useMutation, useQuery } from "convex/react";

const Home = () => {
  // const books = useQuery(api.books.getBooks);
  // console.log("Books from Convex:", books);

  // const addBook = useMutation(api.books.addBook);
  // const clearBooks = useMutation(api.books.clearAllBooks);

  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.image} />

      <ThemedText style={styles.title}>The number 1</ThemedText>

      <Spacer height={10} />

      <ThemedText title={true} style={styles.title}>
        Shelfie App
      </ThemedText>

      <Spacer />

      <Link href="/login" style={styles.link}>
        <ThemedText>Login</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
        <ThemedText>Register</ThemedText>
      </Link>
      <Link href="/profile" style={styles.link}>
        <ThemedText>Profile</ThemedText>
      </Link>
      {/* <ThemedButton
        onPress={() =>
          addBook({
            title: "New Book",
            author: "Author Name",
            publishedYear: 2024,
          })
        }
      >
        <Text style={{ color: "#f2f2f2" }}>Create Book</Text>
      </ThemedButton>
      <ThemedButton onPress={() => clearBooks()}>
        <Text style={{ color: "#f2f2f2" }}>Clear Books</Text>
      </ThemedButton> */}
    </ThemedView>
  );
};

export default Home;

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
  card: {
    marginTop: 20,
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 5,
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
