import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Animated,
  ActivityIndicator,
  Alert,
} from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [animation] = useState(new Animated.Value(0));
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateInputs = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in both email and password fields.");
      return false;
    }
    // Add more validation if needed (e.g., email format)
    return true;
  };

  const handleLogin = () => {
    if (!validateInputs()) return;

    setLoading(true);
    // Simulate a login process
    setTimeout(() => {
      setLoading(false);
      router.push("/(home)");
    }, 4000);
  };

  const animateIn = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
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
            <Text style={styles.title}>Welcome Back</Text>
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
            {loading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <Button
                mode="contained"
                onPress={handleLogin}
                style={styles.button}
                labelStyle={styles.buttonText}
              >
                LOG IN
              </Button>
            )}
            <TouchableOpacity
              onPress={() => router.push("/signup")}
              style={styles.signupLink}
            >
              <Text style={styles.signupText}>
                Don't have an account? Sign Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
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
  signupLink: {
    marginTop: 20,
  },
  signupText: {
    color: "black",
    textDecorationLine: "underline",
  },
  forgotPassword: {
    marginTop: 15,
  },
  forgotPasswordText: {
    color: "black",
    fontSize: 14,
  },
});
