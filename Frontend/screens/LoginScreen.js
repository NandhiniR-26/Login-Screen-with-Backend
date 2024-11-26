import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity } from 'react-native';
import { login } from './api';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await login(email, password);
            alert(response.message);
        } catch (error) {
            alert('Login failed');
        }
    };

    return (
        <View>
            <Text>Email</Text>
            <TextInput value={email} onChangeText={setEmail} />
            <Text>Password</Text>
            <TextInput value={password} onChangeText={setPassword} secureTextEntry />
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.signupText}>New? Register here!</Text>
            </TouchableOpacity>
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};
const styles = StyleSheet.create({
  signupText: {
    color:"#191970",
    textAlign: 'center',
    marginTop: 20,
  },
});

export default LoginScreen;
