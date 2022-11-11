import React, { Component, useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TextInput, Image, ScrollView, KeyboardAvoidingView, Alert, ImageBackground } from 'react-native';

import TextBox from '../../conponents/TextBox';
import Button from '../../conponents/Button';

import Estilo from '../../estilizacao/CadList'

import SelectList from 'react-native-dropdown-select-list'

import { Ato } from '../../models/ato.model';
import { HistoriaAtos } from '../../models/historia_ato.model';

import AtoService from '../../services/ato.services';
import HistoriaService from '../../services/historia.services';
import HistoriaAtosService from '../../services/historia_ato.services';

export default function CadAto({ navigation, route }) {
    const [selectedOpA, setSelectedOpA] = React.useState("");
    const [dataOpA, setDataOpA] = React.useState([]);    

    const [selectedOpB, setSelectedOpB] = React.useState("");
    const [dataOpB, setDataOpB] = React.useState([]);    


    useEffect(() => {
        async function fetchData() {
            const response = await AtoService.getAtosByHistoria(route.params.idHistoria)
                .then((response) => {
                    for (let item of response) {
                        const obj = {key: item.id, value: item.enredo};
                        dataOpA.push(obj);
                        dataOpB.push(obj);
                        console.log(dataOpA);
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


    let [enredoHistoria, setenredoHistoria] = useState('');
  
    let register_Ato = () => {
        console.log(selectedOpA);
        console.log(selectedOpB);

        try 
        {
            if (!enredoHistoria) {
                alert('Enredo da história é obrigatório!');
                return;
            }

            let ato = new Ato()
            ato.enredo = enredoHistoria;
            ato.historia_id = route.params.idHistoria;
            console.log(ato);

            const insertId = AtoService.addData(ato);
            if(insertId == null || insertId == undefined){
                alert("Não foi possivel cadastrar um novo Ato.")
            } else {
                console.log("asaklaksjljldkaj")
                let historiaAto = new HistoriaAtos();
                historiaAto.ato_id = insertId;
                historiaAto.ato_id_a = selectedOpA;
                historiaAto.ato_id_b = selectedOpB;
                historiaAto.historia_id = route.params.idHistoria;
                console.log(historiaAto);
                const insertId = HistoriaAtosService.addData(historiaAto);                
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
                        placeholder="Enredo da História"
                        onChangeText={
                            (enredoHistoria) => setenredoHistoria(enredoHistoria)
                        }
                        maxLength={225}
                        numberOfLines={5}
                        multiline={true}
                        style={{ textAlignVertical: 'top', padding: 10 }}
                    />

                    <hr />

                    <SelectList
                        data={dataOpA}
                        setSelected={setSelectedOpA}
                        onSelect={(selectedOpA) => setSelectedOpA(setSelectedOpA)}
                        search={false}
                        placeholder="Escolha Opção A"
                        dropdownStyles={{ backgroundColor: 'white' }}
                        dropdownTextStyles={{ color: 'black' }}
                    />

                    <hr />

                    <SelectList
                        data={dataOpB}
                        setSelected={setSelectedOpB}
                        onSelect={(selectedOpB) => setSelectedOpB(setSelectedOpB)}
                        search={false}
                        placeholder="Escolha Opção B"
                        dropdownStyles={{ backgroundColor: 'white' }}
                        dropdownTextStyles={{ color: 'black' }}
                    />

                    <hr />
                    <hr />

                    <Button title="Salvar" customClick={register_Ato} />

                </View>

            </SafeAreaView>
        </>
    )

}