import React, { Component, useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TextInput, Image, FlatList, ImageBackground } from 'react-native';

import TextBox from '../../conponents/TextBox';
import SelectList from 'react-native-dropdown-select-list'
import Button from '../../conponents/Button';

import fundoAtos from '../../imagens/fundoAtos.png'
import Estilo from '../../estilizacao/Atos'

import { Ato } from '../../models/ato.model';

import HistoriaService from '../../services/historia.services';
import AtoService from '../../services/ato.services';

export default function Atos({ navigation, route }) {
    let [enredoAto, setEnredoAto] = useState('');
    let [idHistoria, setHistoriaId] = useState('');

    const [selected, setSelected] = React.useState("");
    const [data, setData] = React.useState([]);    

    useEffect(() => {
            async function fetchData() {
            // You can await here
                const response = await HistoriaService.getHistoriasToDropDownComponent()
                    .then((response) => {
                        for (let item of response) {
                            const obj = {key: item.key, value: item.value};
                            data.push(obj);
                            console.log(data);
                        }
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
            <SafeAreaView style={{ paddingHorizontal: 20, paddingVertical: 10, flex: 1 }}>
                <hr />
                <SelectList
                    data={data}
                    setSelected={setSelected}
                    onSelect={() => navigation.navigate('Atos_List', {idHistoria: selected})}
                    search={false}
                    placeholder="Escolha um livro"
                    dropdownStyles={{ backgroundColor: 'white' }}
                    dropdownTextStyles={{ color: 'black' }}
                />

                <hr />
                <hr />

                <hr />



                <hr />
 
            </SafeAreaView>

        </>
    )

}