import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RegisterScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleLogin = () => {
    console.log('Logging in with: ', emailAddress, password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.inputWrap}>
          <TextInput
            label="First name"
            value={firstName}
            onChangeText={text => setFirstName(text)}
            style={styles.input}
            placeholderTextColor="#aaa"
            outlineColor="#aaa"
            mode='outlined'
          />
        </View>

        <View style={styles.inputWrap}>
          <TextInput
            label="Last name"
            value={lastName}
            onChangeText={text => setLastName(text)}
            style={styles.input}
            placeholderTextColor="#aaa"
            outlineColor="#aaa"
            mode='outlined'
          />
        </View>
      </View>

      <TextInput
        label="Email Address"
        value={emailAddress}
        onChangeText={text => setEmailAddress(text)}
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

      <div style={styles.passwordContainer}>
        <TextInput
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.passwordInput}
          placeholder="Enter Password"
          placeholderTextColor="#aaa"
          outlineColor="#aaa"
          mode='outlined'
        />
        <MaterialCommunityIcons
          name={showConfirmPassword ? 'eye-off' : 'eye'}
          size={24}
          color="#aaa"
          style={styles.icon}
          onPress={toggleShowConfirmPassword}
        />
      </div>

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Sign Up
      </Button>

      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text variant="labelMedium">Already have an account?</Text>
          <Text variant="labelMedium" style={styles.linkText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text variant="labelMedium" style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 18,
  },
  row: {
    flexDirection: "row",
    gap: 8
  },
  inputWrap: {
    flex: 1,
  },
  input: {
    marginBottom: 18,
  },
  passwordContainer: {
    position: 'relative',
    marginBottom: 18
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
    marginTop: 0,
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

export default RegisterScreen;
