import React, { Component, useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TextInput, Image, ScrollView, KeyboardAvoidingView, Alert, ImageBackground } from 'react-native';

import TextBox from '../../conponents/TextBox';
import Button from '../../conponents/Button';

import Estilo from '../../estilizacao/CadList'

import AtoService from '../../services/ato.services';
import HistoriaService from '../../services/historia.services';
import HistoriaAtosService from '../../services/historia_ato.services';

export default function Play({ navigation, route }) {

    const [selected, setSelected] = React.useState("");
    const [data, setData] = React.useState([]);
    
    useEffect(() => {
            async function fetchData() {
            // You can await here
                const response = await HistoriaAtosService.getEnredoByHistoriaId(route.params.idHistoria)
                    .then((response) => {
                        console.log(response);
                        // for (let item of response) {
                        //     const obj = {key: item.key, value: item.value};
                        //     data.push(obj);
                        //     console.log(data);
                        // }
                    })
                    .catch((e) => {
                        console.log(e)
                    })
            }
            fetchData();
        }, 
        []
    );

    return (
        <>
            <SafeAreaView style={Estilo.containerTop}>
                {route.params.idHistoria}
                <View>
                    <TextBox
                        maxLength={225}
                        numberOfLines={30}
                        multiline={true}
                        style={{ textAlignVertical: 'top', padding: 10 }}
                    />
                </View>

                <hr />
                <hr />
                <hr />

                <footer style={Estilo.rodapeStyle}>
                    <View>
                       <Button title="Opção A" customClick= {() => navigation.navigate('Livro', {idAto: 3})} />
                       <hr />
                       <Button title="Opção B" customClick= {() => navigation.navigate('Livro', {idAto: 5})} />
                    </View>
                </footer>    

            </SafeAreaView>
        </>
    )

}