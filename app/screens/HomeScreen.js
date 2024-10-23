import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import { styles } from '../style/styles';

// aqui eu estou importando o componente Participant da tabela
import Participant, { Paritipant } from '../components/Participant/index'


export default function HomeScreen() { 



  //criando a função onPress={handParticipantAdd}
  function handParticipantAdd() {
    Alert.alert('add um novo participante')
  }


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Quarta, 23 de Outubro de 2024
      </Text>

      <View style={styles.form}>
        <TextInput style={styles.input}
            placeholder='Digite um nome...'
            placeholderTextColor={'#7f7f7f'}
          />

          <TouchableOpacity style={styles.button} onPress={handParticipantAdd}>
              <Text style={styles.buttonText}>
                <Ionicons style={styles.iconadd}name="add" size={32} />
              </Text>
          </TouchableOpacity>
        </View>

        <Participant />
        <Participant />

        
    </View>
  );
}
