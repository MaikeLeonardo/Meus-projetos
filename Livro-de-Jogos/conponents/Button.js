import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Estilo from '../estilizacao/CadList';

const Button = (props) => {
  return (
    <TouchableOpacity
      style={Estilo.button_jogarStyle}
      onPress={props.customClick}>

      <Text style={{color:"white", fontWeight: 700}}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;