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
export default class GOT extends Component {
  state = {
    videos:[
      {
        "videoId": "s7L2PVdrb_8",
        "title": "Official Opening Credits: Game of Thrones (HBO)",
        "url": "https://i.ytimg.com/vi/s7L2PVdrb_8/hqdefault.jpg",
      },
      {
        "videoId": "xZY43QSx3Fk",
        "title": "\"The War is Not Won:\" Game of Thrones Season 4: Official Trailer (HBO)",
        "url": "https://i.ytimg.com/vi/xZY43QSx3Fk/hqdefault.jpg",
      },
      {
        "videoId": "EI0ib1NErqg",
        "title": "The Real War is Between the Living and The Dead:\" Game of Thrones Season 6: Official Trailer (HBO)",
        "url": "https://i.ytimg.com/vi/EI0ib1NErqg/hqdefault.jpg",
      },
      {
        "videoId": "v-7Fs9HJvs0",
        "title": "Tyrion Dancing and More Bloopers: Game of Thrones Season 4 (HBO)",
        "url": "https://i.ytimg.com/vi/v-7Fs9HJvs0/default.jpg",
      },
      {
        "videoId": "8Wsb4b8CjRs",
        "title": "Game of Thrones Season 6: Blooper Reel (HBO)",
        "url": "https://i.ytimg.com/vi/8Wsb4b8CjRs/hqdefault.jpg",
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

