import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Estilo from '../estilizacao/Home';

const Button_Atos = ({navigation}) => {
    return (
        <TouchableOpacity  onPress={()=> navigation.navigate("Atos")} style={Estilo.button_atosStyle}>
            <Text style={{color: 'white'}}> Atos </Text>
        </TouchableOpacity>
    )
}

export default Button_Atos
