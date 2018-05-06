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
const channelId = 'UCCRZ06KrPr3sXaaExkzIxsg'
const results = 5
export default class Theflash extends Component {
  state = {
    videos:[
      {
        "videoId": "7gRtwdDEMBk",
        "title": "Oliver Queen treina o Flash (DUBLADO HD)",
        "url": "https://i.ytimg.com/vi/7gRtwdDEMBk/hqdefault.jpg",
      },
      {
        "videoId": "so9WtVBJUzg",
        "title": "Flash vs Arqueiro (DUBLADO HD)",
        "url": "https://i.ytimg.com/vi/so9WtVBJUzg/hqdefault.jpg",
      },
      {
        "videoId": "IuHsi2pIrA0",
        "title": "Caitlin aprende a controlar a sua transformação",
        "url": "https://i.ytimg.com/vi/IuHsi2pIrA0/hqdefault.jpg",
      },
      {
        "videoId": "z48774lblNU",
        "title": "Flash, Kid Flash e Jesse Quick Treinando Juntos ",
        "url": "https://i.ytimg.com/vi/z48774lblNU/hqdefault.jpg",
      },
      {
        "videoId": "n2UeU0a4gac",
        "title": "Flash jogando e trapaceando no poker (DUBLADO HD)",
        "url": "https://i.ytimg.com/vi/n2UeU0a4gac/hqdefault.jpg",
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

