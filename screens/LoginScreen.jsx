import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text, HelperText } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
  emailAddress: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string()
    .min(6, 'Password should be atleast 6 characters')
    .required('Password is required'),
});

const handleFormSubmit = (values) => {
  console.log('values', values)
}

const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ emailAddress: '', password: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={values => handleFormSubmit(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <TextInput
              label="Email address"
              value={values.emailAddress}
              onChangeText={handleChange('emailAddress')}
              onBlur={handleBlur('emailAddress')}
              style={styles.input}
              placeholderTextColor="#aaa"
              mode="outlined"
              error={errors.emailAddress}
            />
            <HelperText type="error" visible={errors.emailAddress} padding='none'>
              {errors.emailAddress}
            </HelperText>

            <View style={styles.passwordContainer}>
              <TextInput
                secureTextEntry={!showPassword}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                style={styles.passwordInput}
                label="Password"
                placeholder="Enter Password"
                placeholderTextColor="#aaa"
                mode="outlined"
                error={errors.password}
              />
              <MaterialCommunityIcons
                name={showPassword ? 'eye-off' : 'eye'}
                size={24}
                color="#aaa"
                style={styles.icon}
                onPress={toggleShowPassword}
              />
            </View>
            <HelperText type="error" visible={errors.password} padding='none'>
              {errors.password}
            </HelperText>

            <Button mode="contained" onPress={handleSubmit} style={styles.button}>
              Login
            </Button>
          </>
        )}
      </Formik>

      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.linkText}>Forgot Password?</Text>
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
    //marginBottom: 18,
  },
  passwordContainer: {
    position: 'relative'
  },
  passwordInput: {
    paddingRight: 50
  },
  icon: {
    position: 'absolute',
    top: 14,
    right: 8
  },
  button: {
    marginTop: 18,
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
