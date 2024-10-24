import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import { styles } from '../style/styles';

// aqui eu estou importando o componente Participant da tabela
import Participant, { Paritipant } from '../components/Participant/index'


export default function HomeScreen() { 


  //"Scrow View"componente do react native para criar lista
  const participants = [ 'Bruno Valú', 'Bruno Valú', 'Bruno Valú', 'Bruno Valú', 'Bruno Valú',
    'Bruno Valú', 'Bruno Valú', 'Bruno Valú', 'Bruno Valú', 'Bruno Valú', 'Bruno Valú', 'Bruno Valú', 'Bruno Valú', 'Bruno Valú' ]

  //criando a função onPress={handParticipantAdd} - add participante
  function handParticipantAdd() {
    Alert.alert('add um novo participante')
  }

  //criando a função onPress={handParticipantRemove} - Remover participante
  function handParticipantRemove() {

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

        

        <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({ item }) => (
           
          <Participant
                key={item}
                name={item}
                onRemove={() => handParticipantRemove("Bruno Valu")}
              />
            )} 

            showVerticalScrollIndicator={false} 
            ListEmptyComponent={() => (
              <Text style={styles.listEmptyText}>
                  Adicione participantes do evento.
              </Text>
            )}
            />

    </View>  
  
  );
}
