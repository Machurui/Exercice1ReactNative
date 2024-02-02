import React from 'react';
import { useState } from 'react';
import { SafeAreaView, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import { StackScreenProps } from '@react-navigation/stack';
import { storage } from './App';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const navigation = useNavigation();
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    const handleSubmit = () => {
        // Validez et enregistrez les données
        const passwordCheck = storage.getString(email)

        if (password == passwordCheck) {
            navigation.navigate('ViewAccounts' as never);
        } else {
            Alert.alert("Mauvais mot de passe");
        }
    };

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
            />
            <Button
                onPress={handleSubmit}
                title="Submit"
                color="#000010"
                accessibilityLabel="Learn more about this purple button"
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default SignIn;