import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.userInfo}>Name: {user?.name}</Text>
      <Text style={styles.userInfo}>Email: {user?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={() => dispatch(logout())}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  userInfo: { fontSize: 16, marginBottom: 10 },
  button: { backgroundColor: "#dc3545", padding: 10, borderRadius: 5 },
  buttonText: { color: "#fff", fontSize: 16 },
});

export default ProfileScreen;
