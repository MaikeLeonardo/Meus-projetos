import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Estilo from '../estilizacao/Home';

const Button_CadAto = ({navigation, props}) => {
    return(
        <TouchableOpacity onPress={()=> navigation.navigate('Cadastro_Ato', {idHistoria: props.idHistoria})} style={Estilo.button_historiaStyle}>
            <Text style={{color: 'white'}}> Cadastar Novo Ato </Text>
        </TouchableOpacity>
    )
}

export default Button_CadAto