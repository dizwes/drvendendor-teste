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
const channelId = 'UCOW03eEIhXpP8x930kaPO1g'
const results = 5
export default class Stranger extends Component {
  state = {
    videos:[
      {
        "videoId": "_39AttmJPPg",
        "title": "Mike beija Eleven - Dublado HD",
        "url": "https://i.ytimg.com/vi/_39AttmJPPg/hqdefault.jpg",
      },
      {
        "videoId": "wEk9upkCIyo",
        "title": "Eleven encontra sua irmã - Dublado",
        "url": "https://i.ytimg.com/vi/wEk9upkCIyo/hqdefault.jpg",
      },
      {
        "videoId": "aGBILtjkz30",
        "title": "Mike pula do penhasco - Dublado HD",
        "url": "https://i.ytimg.com/vi/aGBILtjkz30/hqdefault.jpg",
      },
      {
        "videoId": "TLaiH368ZWg",
        "title": "Retorno de Eleven - Dublado",
        "url": "https://i.ytimg.com/vi/TLaiH368ZWg/hqdefault.jpg",
      },
      {
        "videoId": "uen48zlqeok",
        "title": "Eleven faz a van capotar - Dublado HD",
        "url": "https://i.ytimg.com/vi/uen48zlqeok/hqdefault.jpg",
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

