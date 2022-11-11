import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Estilo from '../estilizacao/Home';

const Button_CadHistoria = ({navigation}) => {
    return(
        <TouchableOpacity onPress={()=> navigation.navigate('Cadastro_Historias')} style={Estilo.button_historiaStyle}>
            <Text style={{color: 'white'}}> Cadastro de Histórias </Text>
        </TouchableOpacity>
    )
}

export default Button_CadHistoria