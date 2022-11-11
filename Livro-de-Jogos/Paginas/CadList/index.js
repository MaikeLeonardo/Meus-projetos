import React, { Component, useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { Text, View, SafeAreaView, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Button_Jogar from '../../conponents/button_play';
import SelectList from 'react-native-dropdown-select-list'

import Button from '../../conponents/Button';

import Calabouco from '../../imagens/Calabouco.png'
import Cavaleiro from '../../imagens/Cavaleiro.png'

import Estilo from '../../estilizacao/CadList'

import HistoriaService from '../../services/historia.services';

export default function CadList({ navigation }) {
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

    let selecionarHitoria = (idHistoria) => {
        console.log(idHistoria);
    }


    return (
        <>
            <SafeAreaView style={{ paddingHorizontal: 20, paddingVertical: 10, flex: 1 }}>
                <SelectList
                    data={data}
                    setSelected={setSelected}
                    onSelect={() => selecionarHitoria(selected)}
                    search={false}
                    placeholder="Escolha um livro"
                    dropdownStyles={{ backgroundColor: 'grey' }}
                    dropdownTextStyles={{ color: 'white' }}

                />

                <hr />
                <hr />
                
                <TouchableOpacity  onPress={() => navigation.navigate("Livro", {idHistoria: selected})} style={Estilo.button_jogarStyle}>
                    <Text style={{color: 'white'}}> Jogar </Text>
                </TouchableOpacity>


            </SafeAreaView>

        </>
    )
}