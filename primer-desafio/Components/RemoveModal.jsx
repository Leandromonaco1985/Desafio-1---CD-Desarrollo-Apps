import React from 'react';
import { Modal, Text, View, Pressable, StyleSheet } from 'react-native';

const RemoveModal = ({ modalVisible, setModalVisible, confirmDeleteItem }) => {
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    boton: {
      margin: 20,
      padding: 5,
      backgroundColor: 'red',
      fontColor: 'white',
      borderRadius: 25,
    },
    btnfont: {
      color: 'white'
    }
    

  })  
  return (
      <View style={styles.centeredView}>

        <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
            
        >
            <View style={styles.modalView}>
                <Text>¿Está seguro que desea eliminar este producto?</Text>
                <Pressable onPress={confirmDeleteItem} style={styles.boton}>
                    <Text style={styles.btnfont} >Confirmar</Text>
                </Pressable>
                <Pressable style={styles.boton} onPress={() => setModalVisible(false)}>
                    <Text style={styles.btnfont}>Cancelar</Text>
                </Pressable>
            </View>
        </Modal>    
      </View>

);


};

export default RemoveModal;
