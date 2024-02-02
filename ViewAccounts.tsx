import React from 'react';
import { useState } from 'react';
import { SafeAreaView, TextInput, Button, StyleSheet } from 'react-native';
import { View, Text, FlatList } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import { StackScreenProps } from '@react-navigation/stack';
import { storage } from './App';
import { useNavigation } from '@react-navigation/native';

const ViewAccounts = () => {
    const navigation = useNavigation();
    const accounts = JSON.parse(storage.getString('accounts') || '[]');

    const handleSignOut = () => {
        navigation.navigate('SignIn' as never);
    };


    return (
        <SafeAreaView>
            <FlatList
                data={accounts}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            />
            <Button title="Se déconnecter" onPress={handleSignOut} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    item: {
        padding: 10,
        fontSize: 18,
    },
});

export default ViewAccounts;