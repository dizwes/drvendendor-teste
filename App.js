
import React, { Component } from 'react';

import {  StackNavigator } from 'react-navigation'

import Login from './pages/Login'
import Categorias from './pages/Categorias'
import Lacasadepapel from './pages/Lacasadepapel'
import GOT from './pages/GOT'
import Theflash from './pages/Theflash'
import Stranger from './pages/Stranger'


export default StackNavigator ({
  'Main':{
    screen: Login
  },
  'Categorias':{
    screen: Categorias,
  },
  'Lacasadepapel':{
    screen: Lacasadepapel
  },
  'GOT':{
    screen: GOT
  },
  'Theflash':{
    screen: Theflash
  },
  'Stranger':{
    screen: Stranger
  },
},
{
  navigationOptions:{
    title: '',
    headerStyle: {
      backgroundColor: 'transparent',
      borderBottomColor: 'transparent',
    },
    headerTransparent:{

    }
  }
});



