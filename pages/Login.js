import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    StyleSheet,
    StatusBar,
    Image,
    Button
} from 'react-native';
const logo = require('../assets/logo.png');
export default class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: '',
      password: '',
    }
  }
  onChangeUser(user){
    this.setState({ user })
  }

  onChangePassword(password){
    this.setState({ password })
  }

  render() {

    return (
      <ScrollView style={styles.container}>
        <StatusBar
          hidden={true}
        />
        <View style={styles.boxContainer}>
          <View
            style={styles.boxLogo}>
            <Image
            source={logo}
            style={{width: 300, height: 100}}
            />
          </View>
          <TextInput
            autoFocus
            autoCapitalize="none"
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder='Usuário'
            style={styles.inputBox}
            placeholderTextColor="#FFF"
            value={this.state.user}
            onChangeText={value => this.onChangeUser(value)}
          />
          <TextInput
            secureTextEntry={true}
            autoCapitalize="none"
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder='Senha'
            style={styles.inputBox}
            placeholderTextColor="#FFF"
            value={this.state.password}
            onChangeText={value => this.onChangePassword(value)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
           color="#65ff00"
            style={styles.loginButton}
            onPress={() =>{
              this.props.navigation.navigate('Categorias');
            }}
            title="Login"
          />
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
  flex: 1,
  paddingTop: 100,
  backgroundColor:'#131313',
},
boxContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: 20,
},
boxLogo: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  paddingBottom: 100,
},
inputBox: {
  alignSelf: 'stretch',
  marginTop: 10,
  paddingVertical: 0,
  paddingHorizontal: 20,
  borderWidth: .3,
  borderColor: '#DDD',
  height: 40,
  borderRadius: 3,
  marginHorizontal: 20,
  color: '#DDD',
},
buttonContainer: {
  flex: 1,
  alignSelf: 'stretch',
  borderColor: '#65ff00',
  borderWidth: .6,
  borderRadius: 3,
  marginHorizontal: 100,
},

})
