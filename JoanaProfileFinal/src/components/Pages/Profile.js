import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Index from "../Avatar/Index";
import ProfileSection from "../Buttons/ProfileSection";
import Settings from "../Buttons/Settings";
import SignOut from "../Buttons/SignOut"; // Import SignOut component

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);

  return (
    <LinearGradient
      colors={isDarkMode ? ["#333", "#121212"] : ["#FF6347", "#4682B4"]} // Use more distinct colors for testing
      style={styles.container}
    >
      {/* Header section */}
      <View style={styles.header}>
        <Index />
        <Text
          style={[styles.nameText, { color: isDarkMode ? "#fff" : "#bdbdbd" }]}
        >
          Joana Eve Razon
        </Text>
        <Text
          style={[styles.subText, { color: isDarkMode ? "#fff" : "#90a4ae" }]}
        >
          Senior Quality Evaluator
        </Text>
        <Text
          style={[styles.subText, { color: isDarkMode ? "#fff" : "#90a4ae" }]}
        >
          Joined 4 Years ago
        </Text>

        {/* Place SignOut component here to show below the last text */}
        <SignOut />
      </View>

      {/* Main content sections with added spacing */}
      <View style={styles.mainContent}>
        <ProfileSection isDarkMode={isDarkMode} />
        <Settings isDarkMode={isDarkMode} toggleSwitch={toggleSwitch} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray", // Temporarily set to check rendering
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    paddingTop: 50,
  },
  nameText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 180, // Reduced to place name closer to the profile picture
    color: "#FF5733",
  },
  subText: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10, // Reduced to place name closer to the profile picture
  },
  mainContent: {
    flex: 1,
    justifyContent: "center", // This centers the sections vertically
    paddingHorizontal: 20, // Padding to ensure sections aren't too close to the edges
    marginTop: 5, // Added space to lower the profile sections
  },
});

export default Profile;
