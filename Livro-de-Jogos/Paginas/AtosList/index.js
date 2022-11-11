import React, { Component, useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { Text, View, SafeAreaView, StyleSheet, TextInput, Image, ImageBackground, FlatList } from 'react-native';
import Button_CadAto from '../../conponents/button_CadAto';
import SelectList from 'react-native-dropdown-select-list'

import Calabouco from '../../imagens/Calabouco.png'
import Cavaleiro from '../../imagens/Cavaleiro.png'

import Button from '../../conponents/Button';

import Estilo from '../../estilizacao/CadList'

import AtoService from '../../services/ato.services';

const AtosList = ({ navigation, route }) => {
    let [flatListItems, setFlatListItems] = useState([]);

      useEffect(() => {
            async function fetchData() {
                // You can await here
                const response = await AtoService.getAtosByHistoria(route.params.idHistoria)
                    .then((response) => {
                        var temp = [];
                        for (let item of response) {
                            temp.push(item)
                        }
                        setFlatListItems(temp);
                        }
                    )
                    .catch((e) => {
                        console.log(e)
                    })
            }
            fetchData();
        }, 
        []
    );

    let listItemView = (item) => {
        return (
            <View
                key={item.user_id}
                style={{ backgroundColor: '#EEE', marginTop: 20, padding: 30, borderRadius: 10 }}>
                <Text style={styles.textbottom}>{item.enredo}</Text>    
            </View>
        );
    };
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        style={{ marginTop: 30 }}
                        contentContainerStyle={{ paddingHorizontal: 20 }}
                        data={flatListItems}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => listItemView(item)}
                    />
                </View>
            </View>

            <hr />

            <Button title="Criar Novo Ato" customClick={() => navigation.navigate('Cadastro_Ato', {idHistoria: route.params.idHistoria})} />

        </SafeAreaView>

        );
    };
          
    const styles = StyleSheet.create({
        textheader: {
            color: '#111',
            fontSize: 12,
            fontWeight: '700',
        },

        textbottom: {
            color: '#111',
            fontSize: 18,
        },
    });

export default AtosList;