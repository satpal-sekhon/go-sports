import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleForgotPassword = () => {
    schema
      .validate({ email })
      .then(() => {
        setErrors([]);
        console.log('Validation successful');
        console.log('Reset password for email:', email);
      })
      .catch((err) => {
        const errors = {};
        errors[err.path] = err.message;
        
        setErrors(errors);
        console.log('Validation errors:', errors);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#aaa"
        mode="outlined"
        error={errors.email}
      />

      <Button mode="contained" onPress={handleForgotPassword} style={styles.button}>
        Reset Password
      </Button>

      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Back to Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.linkText}>Sign Up</Text>
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
  input: {
    marginBottom: 18,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 18,
  },
  linkText: {
    color: '#6750a4',
  },
  button: {
    marginTop: 10,
  },
});

export default ForgotPasswordScreen;
