import React, { Component, useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TextInput, Image, ScrollView, KeyboardAvoidingView, Alert, ImageBackground } from 'react-native';

import TextBox from '../../conponents/TextBox';
import Button from '../../conponents/Button';

import Estilo from '../../estilizacao/CadList'

import { Historia } from '../../models/historia.model';
import HistoriaService from '../../services/historia.services';

export default function CadHistorias({ navigation }) {
    let [nomeHistoria, setNomeHistoria] = useState('');
    let [nomeAutor, setNomeAutor] = useState('');
    let [sequenciaHistoria, setSequencia] = useState('');
    let [versaoHistoria, setVersao] = useState('');
  

    let register_historia = () => {
        try 
        {
            if (!nomeHistoria) {
                alert('Título da historia obrigatório!');
                return;
            }
            if (!sequenciaHistoria) {
                alert('A Sequencia é obrigatória!');
                return;
            }
            if (!versaoHistoria) {
                alert('A Versão é obrigatória!');
                return;
            }

            let historia = new Historia()
            historia.nome = nomeHistoria;
            historia.sequencia = sequenciaHistoria;
            historia.autores = nomeAutor;
            historia.versao = versaoHistoria;

            console.log(historia);

            const insertId = HistoriaService.addData(historia);
            if(insertId == null || insertId == undefined){
                alert("Não foi possivel uma nova história")
            }

        } catch (e) {
            alert(e)
        }
    
    };
    
    return (
        <>
            <SafeAreaView style={Estilo.containerTop}>
                <View>
                    <TextBox
                        placeholder="Título da História"
                        onChangeText={
                            (nomeHistoria) => setNomeHistoria(nomeHistoria)
                        }
                        style={{ padding: 10 }}
                    />
                    <TextBox
                        placeholder="Sequencia da História"
                        onChangeText={
                            (sequenciaHistoria) => setSequencia(sequenciaHistoria)
                        }
                        maxLength={10}
                        keyboardType="numeric"
                        style={{ padding: 10 }}
                    />
                    <TextBox
                        placeholder="Autores da História"
                        onChangeText={
                            (nomeAutor) => setNomeAutor(nomeAutor)
                        }
                        maxLength={225}
                        numberOfLines={5}
                        multiline={true}
                        style={{ textAlignVertical: 'top', padding: 10 }}
                    />
                    <TextBox
                        placeholder="Versão da História"
                        onChangeText={
                            (versaoHistoria) => setVersao(versaoHistoria)
                        }
                        maxLength={10}
                        keyboardType="numeric"
                        style={{ padding: 10 }}
                    />         

                    <hr />

                    <Button title="Salvar"  customClick={register_historia} />
                </View>
            </SafeAreaView>
        </>
    )

}