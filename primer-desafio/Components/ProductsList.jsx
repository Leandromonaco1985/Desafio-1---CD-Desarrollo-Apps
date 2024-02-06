import React, { useState } from 'react';
import { Pressable, View, Text, TextInput, FlatList, Modal } from 'react-native';

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
        <View>
            <Text>ProductsList</Text>
            <TextInput 
                onChangeText={handleInputValue} 
                value={inputValue} 
                placeholder='Ingrese producto' 
            />
            <Pressable onPress={addItem}> 
                <Text> Agregar </Text> 
            </Pressable>
            <Text> Productos Agregados:</Text>
            <FlatList
                data={cartItem}
                renderItem={({ item }) => (
                    <View key={`product_${item.id}`}>
                        <Text>Producto: {item.name}</Text>
                        <Pressable onPress={() => removeItem(item.id)}> 
                            <Text style={{ color: 'red' }}>Eliminar</Text> 
                        </Pressable>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View>
                    <Text>¿Está seguro que desea eliminar este producto?</Text>
                    <Pressable onPress={confirmDeleteItem}> 
                        <Text>Confirmar</Text> 
                    </Pressable>
                    <Pressable onPress={() => setModalVisible(false)}> 
                        <Text>Cancelar</Text> 
                    </Pressable>
                </View>
            </Modal>
        </View>
    );
};
