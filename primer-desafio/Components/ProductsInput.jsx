import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const ProductsInput = ({ onChangeText, value }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
                placeholder='Ingrese producto'
                placeholderTextColor='#999'
                selectionColor='#333' 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    input: {
        fontSize: 16,
        color: '#333',
    },
});

export default ProductsInput;