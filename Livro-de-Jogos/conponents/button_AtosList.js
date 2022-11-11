import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Estilo from '../estilizacao/CadList';

const Button_AtosList = ({navigation}) => {
    return(
        <TouchableOpacity  onPress={() => navigation.navigate("Atos_List")} style={Estilo.button_jogarStyle}>
            <Text style={{color: 'white'}}> Listar Atos </Text>
        </TouchableOpacity>
    )
}

export default Button_AtosList