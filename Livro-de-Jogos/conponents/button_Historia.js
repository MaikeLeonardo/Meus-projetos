import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Estilo from '../estilizacao/Home';

const Button_Historia = ({navigation}) => {
    return(
        <TouchableOpacity onPress={()=> navigation.navigate('Cadastros')} style={Estilo.button_historiaStyle}>
            <Text style={{color: 'white'}}> Histórias </Text>
        </TouchableOpacity>
    )
}

export default Button_Historia