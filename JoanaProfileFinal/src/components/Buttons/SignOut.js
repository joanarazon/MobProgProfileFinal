import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const SignOut = () => {
  const handleSignOut = () => {
    Alert.alert("Sign Out", "You have been signed out.", [{ text: "OK" }]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
        <AntDesign name="logout" size={24} color="#f5f5f5" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  signOutButton: {
    flexDirection: "row", // Align icon and text in a row
    alignItems: "center", // Center vertically
    padding: 10,
  },
});

export default SignOut;
