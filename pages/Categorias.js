import React, { Component } from 'react';
import axios from 'axios';

import {
    ScrollView,
    Text,
    View,
    Button,
    StatusBar,
    Image,
    StyleSheet
} from 'react-native';
const logo = require('../assets/logo.png');
const got = require('../assets/got-logo.png');
const lacasa= require('../assets/lacasa-logo.png');
const stranger= require('../assets/stranger-logo.png');
const flash= require('../assets/flash-logo.png');
export default class Categoria extends Component {

   render(){
    return (
      <ScrollView style={styles.categoriaContainer}>
        <StatusBar
          hidden={true}
        />
        <View style={styles.topo}>
          <Image
            source={logo}
            style={{width: 150, height: 50, marginTop: 10,}}
          />
        </View>
        <Text style={styles.categoriasTitle}>Categorias</Text>
        <View style={styles.categoriasList}>
          <View style={styles.boxCategoria}>
            <Image
              source={got}
              style={{width: 130, height: 130,}}
            />
            <Button title="Acessar"
            color="#65ff00"
            onPress={() =>{
              this.props.navigation.navigate('GOT');
            }}
            />
          </View>
          <View style={styles.boxCategoria}>
            <Image
              source={lacasa}
              style={{width: 130, height: 130,}}
            />
            <Button title="Acessar"
            color="#65ff00"
            onPress={() =>{
              this.props.navigation.navigate('Lacasadepapel');
            }}
            />
          </View>
          <View style={styles.boxCategoria}>
            <Image
              source={stranger}
              style={{width: 130, height: 130,}}
            />
            <Button title="Acessar"
            color="#65ff00"
            onPress={() =>{
              this.props.navigation.navigate('Stranger');
            }}
            />
          </View>
          <View style={styles.boxCategoria}>
            <Image
              source={flash}
              style={{width: 130, height: 130,}}
            />
            <Button title="Acessar"
            color="#65ff00"
            onPress={() =>{
              this.props.navigation.navigate('Theflash');
            }}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  categoriaContainer: {
    flex: 1,
    backgroundColor: '#131313',
  },
  topo: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    marginTop: 25,
  },
  categoriasTitle:{
    color: '#FFF',
    textAlign: 'center',
    fontSize: 26,
    paddingTop: 40,
  },
  categoriasList:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 50,
  },
  boxCategoria:{
    width: 150,
    height: 190,
    margin: 15,
    borderWidth: .5,
    borderColor: '#65ff00',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

