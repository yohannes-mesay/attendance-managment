import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Animated,
  Alert,
} from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [animation] = useState(new Animated.Value(0));
  const router = useRouter();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSignup = () => {
    if (!validateEmail(email)) {
      Alert.alert("Invalid email", "Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Weak password", "Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Password mismatch", "Passwords do not match.");
      return;
    }
    // Implement signup logic here
    console.log("Signup with:", email, password);
  };

  const animateIn = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    animateIn();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={styles.gradient}>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar style="light" />
          <Animated.View
            style={[
              styles.container,
              {
                opacity: animation,
                transform: [
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <Text style={styles.title}>Create Account</Text>
            <TextInput
              style={styles.input}
              label="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              mode="outlined"
              theme={{ colors: { primary: "#fff", text: "#fff" } }}
            />
            <TextInput
              style={styles.input}
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secureTextEntry}
              mode="outlined"
              theme={{ colors: { primary: "#fff", text: "#fff" } }}
              right={
                <TextInput.Icon
                  icon={secureTextEntry ? "eye-off" : "eye"}
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                  color="#fff"
                />
              }
            />
            <TextInput
              style={styles.input}
              label="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={secureTextEntry}
              mode="outlined"
              theme={{ colors: { primary: "#fff", text: "#fff" } }}
            />
            <Button
              mode="contained"
              onPress={handleSignup}
              style={styles.button}
              labelStyle={styles.buttonText}
            >
              SIGN UP
            </Button>
            <TouchableOpacity
              onPress={() => router.push("/login")}
              style={styles.loginLink}
            >
              <Text style={styles.loginText}>
                Already have an account? Log In
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </SafeAreaView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    marginBottom: 15,
    width: "100%",
    maxWidth: 300,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  button: {
    marginTop: 20,
    width: "100%",
    maxWidth: 300,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "#3b5998",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginLink: {
    marginTop: 20,
  },
  loginText: {
    color: "black",
    textDecorationLine: "underline",
  },
});
