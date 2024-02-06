import React, { useState } from 'react';
import { Pressable, View, Text, FlatList, StyleSheet } from 'react-native';
import RemoveModal from './RemoveModal';
import ProductsInput from './ProductsInput';

export const ProductsList = () => {
    const [inputValue, setInputValue] = useState('');
    const [cartItem, setCartItems] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const handleInputValue = (value) => setInputValue(value);

    const addItem = () => {
        if (inputValue.trim() === '') {
            return; //Evito agregar elementos vacíos al carrito
        }
        const newItem = {
            name: inputValue,
            id: new Date().getTime()
        };
        setCartItems([...cartItem, newItem]);
        setInputValue(''); // Limpiar el input después de agregar un producto
    };

    const removeItem = (itemId) => {
        setItemToDelete(itemId);
        setModalVisible(true);
    };

    const confirmDeleteItem = () => {
        const updatedCartItem = cartItem.filter(item => item.id !== itemToDelete);
        setCartItems(updatedCartItem);
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text>Products List</Text>

            <ProductsInput
                onChangeText={handleInputValue}
                value={inputValue}
            />
            
            <Pressable  style={styles.button} onPress={addItem}>
                <Text style={styles.buttonText}>  Agregar </Text>
            </Pressable>
            <Text style={styles.subtitle}> Productos Agregados:</Text>
            <FlatList
                data={cartItem}
                renderItem={({ item }) => (
                    <View styles={styles.itemListStyle}key={`product_${item.id}`}>
                        <Text >Producto: {item.name}</Text>
                        <Pressable onPress={() => removeItem(item.id)}>
                            <Text style={styles.deleteButton}>Eliminar</Text>
                        </Pressable>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
            <RemoveModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                confirmDeleteItem={confirmDeleteItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
   
        container: {
            flex: 1,
            width: '100%',
            alignItems: 'center',
            padding: 30,
            backgroundColor: '#fdf0d5'
        },
        button: {
            backgroundColor: '#007bff',
            borderRadius: 10,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop: 10,
        },
        buttonText: {
            color: '#003049',
            fontSize: 18,
        },
        productContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 5,
        },
        itemListStyle:{
            padding: 0,
        },
        productText: {
            fontSize: 16,
            
            color: '#c1121f',
            
        },
        deleteButton: {
            color: '#c1121f',
            fontSize: 16,
            borderRadius: 25
        },
    
})