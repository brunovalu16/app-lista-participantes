import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';


import { styles } from './styles'


export default function Participant() {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                Bruno Valú
            </Text>

            <TouchableOpacity style={styles.button2} >
                <Text style={styles.buttonText2}>
                    <Ionicons style={styles.iconadd2}name="remove" size={32} />
                </Text>
            </TouchableOpacity>
        </View>
    )
}