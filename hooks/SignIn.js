import { Button } from "@ui-kitten/components";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { FacebookIcon, GoogleIcon, TwitterIcon } from "../app/assets/icons";
import CustomInput from "../components/CustomInput";

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text style={{ fontFamily: "Nunito-Bold", fontSize: 32 }}>
        Welcome Back
      </Text>
      <Text style={{ fontFamily: "Nunito-ExtraLight", fontSize: 15, top: 8 }}>
        Hi there! Nice to see you again
      </Text>
      <View style={styles.containerInput}>
        <Text style={styles.textHeaderInput}>Email</Text>
        <CustomInput />
        <View style={styles.space(24)} />
        <Text style={styles.textHeaderInput}>Password</Text>
        <CustomInput secureTextEntry={true} icon="eye-outline" />
      </View>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Dashboard")}
      >
        Sign In
      </Button>
      <Text
        style={{ fontFamily: "Nunito-ExtraLight", fontSize: 15, marginTop: 32 }}
      >
        or use one of your social profiles
      </Text>
      <View style={styles.containerIcon}>
        <View
          style={{
            ...styles.borderIcon,
            backgroundColor: "#1877F2",
          }}
        >
          <FacebookIcon width={24} height={24} />
        </View>
        <View style={{ ...styles.borderIcon, backgroundColor: "#FBFBFB" }}>
          <GoogleIcon width={24} height={24} />
        </View>
        <View style={{ ...styles.borderIcon, backgroundColor: "#1DA1F2" }}>
          <TwitterIcon width={24} height={24} />
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <Text style={{ fontFamily: "Nunito-Regular", right: 8 }}>
          Don't Have an Account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ fontFamily: "Nunito-Regular", color: "#FFB951" }}>
            SignUp
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  containerInput: {
    width: "82%",
    marginTop: 76,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderBottomColor: "#E5E5E5",
  },
  textHeaderInput: {
    fontFamily: "Nunito-Regular",
    fontSize: 18,
    color: "#FFB951",
  },
  button: {
    marginTop: 80,
    width: "72%",
    backgroundColor: "#003F5A",
    borderColor: "transparent",
    borderRadius: 10,
  },
  containerIcon: {
    flexDirection: "row",
    width: "45%",
    justifyContent: "space-between",
    marginTop: 31,
  },
  borderIcon: {
    borderRadius: 50,
    width: 52,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
  },
  space: (value) => {
    return {
      height: value,
    };
  },
});
