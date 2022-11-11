import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Top from '../estilizacao/Home';

const Button_Config = () => {
    return(
        <TouchableOpacity style={Top.button_configStyle}>
            <Text style={{color: 'white'}}> Config </Text>
        </TouchableOpacity>
    )
}

export default Button_Config