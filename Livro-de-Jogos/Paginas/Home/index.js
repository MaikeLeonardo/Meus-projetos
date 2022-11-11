import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView, ImageBackground, Alert } from 'react-native';
import Button_Atos from '../../conponents/button_Atos';
import Button_Historia from '../../conponents/button_Historia';
import Button_CadHistoria from '../../conponents/button_CadHistoria';

import Estilo from '../../estilizacao/Home'
import image from '../../imagens/tela_fundo.png'

export default function Home({ navigation }) {

    return (
        <>

            <ImageBackground source={image} style={Estilo.imagemStyle}>
                <SafeAreaView style={Estilo.containerTop}>
                    <View>
                        <Button_Historia navigation={navigation} />
                    </View>
                    <View>
                        <Button_Atos  navigation={navigation}/>
                    </View>
                </SafeAreaView>

                <footer style={Estilo.rodapeStyle}>
                    <View>
                        <Button_CadHistoria navigation={navigation} />
                    </View>
                </footer>
            </ImageBackground>
        </>
    );
}