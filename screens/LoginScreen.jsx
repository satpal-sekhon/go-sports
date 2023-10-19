import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity  } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    console.log('Logging in with: ', username, password);
  };

  const handleForgotPassword = () => {
    // Navigate to ForgotPasswordScreen
    navigation.navigate('ForgotPassword');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        label="Username"
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.input}
        placeholderTextColor="#aaa"
        outlineColor="#aaa"
        mode='outlined'
      />

      <div style={styles.passwordContainer}>
        <TextInput
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          style={styles.passwordInput}
          placeholder="Enter Password"
          placeholderTextColor="#aaa"
          outlineColor="#aaa"
          mode='outlined'
        />
        <MaterialCommunityIcons
          name={showPassword ? 'eye-off' : 'eye'}
          size={24}
          color="#aaa"
          style={styles.icon}
          onPress={toggleShowPassword}
        />
      </div>

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>

      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text variant="labelMedium" style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <Text variant="labelMedium" style={styles.linkText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  input: {
    marginBottom: 20,
  },
  passwordContainer: {
    position: 'relative'
  },
  passwordInput: {
    paddingRight: '28px'
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: '14px',
    right: '8px'
  },
  button: {
    marginTop: 20,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
  },
  linkText: {
    color: '#6750a4',
  }
});

export default LoginScreen;
