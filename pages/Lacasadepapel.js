import React, { Component } from 'react';
import axios from 'axios';

import {
    ScrollView,
    Text,
    View,
    Button,
    StatusBar,
    TouchableHighlight,
    Image,
    TextInput,
    StyleSheet
} from 'react-native';
import Video from '../components/Video';
const logo = require('../assets/logo.png');
const apiKey = 'AIzaSyCccV6zZUzI_7SnYQOQRcX1ZF9HA-MRK2g'
const channelId = 'UCQzdMyuz0Lf4zo4uGcEujFw'
const results = 5
export default class Lacasadepapel extends Component {
  state = {
    videos:[
      {
        "videoId": "s7L2PVdrb_8",
        "title": "Bella ciao no metro! ",
        "url": "https://i.ytimg.com/vi/s7L2PVdrb_8/hqdefault.jpg",
      },
      {
        "videoId": "mX_olpPsDlY",
        "title": "MELHOR CENA DE LA CASA DE PAPEL!!  La Casa De Papel Brasil (Bella Ciao Cena)",
        "url": "https://i.ytimg.com/vi/mX_olpPsDlY/hqdefault.jpg",
      },
      {
        "videoId": "yqFq9cUr6bE",
        "title": "CENA MORTE DO BERLIM DUBLADO) CENA MAIS TRISTE DA SERIE",
        "url": "https://i.ytimg.com/vi/yqFq9cUr6bE/hqdefault.jpg",
      },
      {
        "videoId": "sZpjZXGDOp4",
        "title": "MELHOR VIDEO DO YOUTUBE - Bella Ciao melhor couver ",
        "url": "https://i.ytimg.com/vi/sZpjZXGDOp4/hqdefault.jpg",
      },
      {
        "videoId": "t0Y6EFDtfQU",
        "title": "ATORES DA SERIE DANÇANDO! (VIDEO ORIGINAL)",
        "url": "https://i.ytimg.com/vi/t0Y6EFDtfQU/hqdefault.jpg",
      },
    ],
  };


  render(){
    return (
      <ScrollView style={styles.homeContainer}>
        <StatusBar
          hidden={true}
        />
        <View style={styles.topo}>
          <Image
            source={logo}
            style={{width: 150, height: 50, marginTop: 10,}}
          />
        </View>
        <View style={styles.containerPlay}>
          <Button
            title="Iniciar VideoQuiz"
            color='white'
            onPress={() =>{
              this.props.navigation.navigate('Categorias');
            }}
          />
        </View>
          {this.state.videos.map(video =>
          <Video key={video.videoId} data={video}/>
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  homeContainer: {
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
boxVideo: {
  width: 60,
  height: 60,
  margin: 2,
  backgroundColor: '#DDD',
},
containerPlay:{
  alignItems: 'center',
  flex: 1,
  margin: 20,
  borderRadius: 4,
  backgroundColor: 'green',
}
})

