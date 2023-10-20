import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text, HelperText } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/AntDesign';

const loginValidationSchema = yup.object().shape({
  emailAddress: yup.string().email('Invalid email').required('Email is required'),
});

const handleFormSubmit = (values) => {
  console.log('values', values)
}

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ emailAddress: '' }}
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

            <Button mode="contained" onPress={handleSubmit} style={styles.button}>
              Forgot Password
            </Button>
          </>
        )}
      </Formik>

      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>
            <Icon name="arrowleft" size={14} style={styles.iconWithLabel} />
            Back to Login</Text>
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
  iconWithLabel: {
    marginRight: 4
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
