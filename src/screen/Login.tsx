import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {biruTua, hitam, putih} from '../utils/Colors';
import BottomLogReg from '../components/BottomLogReg';
import InputText from '../components/InputText';
import Bottom from '../components/Bottom';

type Props = {
  navigation: any;
};

export default class Login extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/image/iphone.png')}
        />
        <Text style={styles.counterText}>LOGIN</Text>
        <Text style={styles.counterText2}>Sign Up For Free</Text>
        <InputText />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Profile')}>
          <View style={styles.bottom}>
            <Text style={styles.txtBottom}>Sign In</Text>
          </View>
        </TouchableOpacity>
        {/* <BottomLogReg /> */}
        <Bottom />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: putih,
    alignItems: 'center',
  },
  logo: {
    marginTop: 40,
    height: 150,
    width: 150,
  },
  counterText: {
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 28,
    color: hitam,
  },
  counterText2: {
    marginTop: 20,
    color: hitam,
  },
  bottom: {
    marginTop: 180,
    borderRadius: 30,
    backgroundColor: biruTua,
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBottom: {
    color: putih,
    fontSize: 25,
    fontWeight: '800',
  },
});
