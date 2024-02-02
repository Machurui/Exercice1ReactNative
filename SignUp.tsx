import React from 'react';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import notifee from '@notifee/react-native';
import { useNavigation } from '@react-navigation/native';
import { storage } from './App';

const SignUp = () => {
    const navigation = useNavigation();
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    const handleSubmit = () => {
        // Validez et enregistrez les données
        if (email != "" && password != "") {
            // Enregistrement des données de l'utilisateur
            storage.set(email, password);

            // Enregistrement du compte email dans une liste de compte pour affichage ultérieur
            const currentAccounts = JSON.parse(storage.getString('accounts') || '[]');
            currentAccounts.push(email);
            storage.set('accounts', JSON.stringify(currentAccounts));

            navigation.navigate('SignIn' as never);

        } else {
            Alert.alert("Veuillez remplir tous les champs !");
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

export default SignUp;