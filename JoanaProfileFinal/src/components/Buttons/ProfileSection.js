import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ProfileSection = ({ isDarkMode }) => {
  return (
    <View
      style={[
        styles.section,
        isDarkMode ? styles.darkSection : styles.lightSection,
      ]}
    >
      <Text
        style={[
          styles.sectionTitle,
          isDarkMode ? styles.darkText : styles.lightText,
        ]}
      >
        Profile
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          alert("Sorry, only authorized users have access on this.")
        }
      >
        <MaterialIcons name="manage-accounts" size={24} color="black" />
        <Text style={styles.buttonText}>Manage User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 10,
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lightSection: {
    backgroundColor: "#f8f8f8",
  },
  darkSection: {
    backgroundColor: "#333",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f8f8", // Change this based on your theme
    borderRadius: 5,
  },
  buttonText: {
    marginLeft: 10, // Space between icon and text
    fontSize: 16,
    color: "#000", // Change this based on your theme
  },
  lightText: {
    color: "#000",
  },
  darkText: {
    color: "#fff",
  },
});

export default ProfileSection;
