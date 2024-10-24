import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';


import { styles } from './styles'


//estou tipando a função "Participant"
type Props = {
    name: string;
    onRemove: () => void;
}


export default function Participant({ name, onRemove }: Props) {

    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                { name }
            </Text>

            <TouchableOpacity style={styles.button2} onPress={onRemove}>
                <Text style={styles.buttonText2}>
                    <Ionicons style={styles.iconadd2} name="remove-outline" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}