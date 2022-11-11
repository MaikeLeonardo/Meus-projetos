import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Estilo from '../estilizacao/CadList';

const Button_Jogar = ({navigation}) => {
    return(
        <TouchableOpacity  onPress={() => navigation.navigate("Livro")} style={Estilo.button_jogarStyle}>
            <Text style={{color: 'white'}}> Jogar </Text>
        </TouchableOpacity>
    )
}

export default Button_Jogar