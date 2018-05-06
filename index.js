import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native'; YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTVideoManager','TCTCxxModule was not exported', 'Module RCTImageLoader']);


AppRegistry.registerComponent('DrVendedorTeste', () => App);
