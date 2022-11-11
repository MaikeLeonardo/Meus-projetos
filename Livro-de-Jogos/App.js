import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Paginas/Home';
import CadList from './Paginas/CadList';
import Jogar from './Paginas/Jogar';
import Atos from './Paginas/Atos';
import AtosList from './Paginas/AtosList';
import CadAto from './Paginas/CadAto';
import CadHistorias from './Paginas/CadHistorias';
import DatabaseInit from './database/database-init';

const Stack = createStackNavigator();

export default function App({livro}) {
  new DatabaseInit();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Livro de Jogos">
        <Stack.Screen name="Livro de Jogos" component={Home} />
        <Stack.Screen name="Cadastros" component={CadList} />
        <Stack.Screen name="Cadastro_Historias" component={CadHistorias} />
        <Stack.Screen name="Livro" component={Jogar} />
        <Stack.Screen name="Atos" component={Atos} />
        <Stack.Screen name="Atos_List" component={AtosList} />
        <Stack.Screen name="Cadastro_Ato" component={CadAto} />        
      </Stack.Navigator>
    </NavigationContainer>

  )
}

