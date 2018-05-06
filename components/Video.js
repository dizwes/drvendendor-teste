import React, { Component } from 'react';
import Video from 'react-native-video'


import { View, StyleSheet, Image, Text } from 'react-native';

export default class Videos extends Component {
  render(){
    return(
      <View style={styles.searchResult}>
        <Image style={styles.videoImage}
          source={{uri:this.props.data.url}}/>
        <Text style={styles.videoTitle}>{this.props.data.title}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  searchResult: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoTitle:{
    color: '#FFF',
  },
  videoImage:{
    width: 300,
    height: 110,
  }
})
