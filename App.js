import React, {useState, useEffect} from "react";
import {View, StyleSheet, Image, TouchableOpacity, } from "react-native";
import Torch from "react-native-torch";
import RNShake from "react-native-shake";

import imagex from "./assets/icons/eco-light-off.png";
import imagey from "./assets/icons/eco-light.png";
import imageDIOx from "./assets/icons/logo-dio-white.png";
import imageDIOy from "./assets/icons/logo-dio.png";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle)

  useEffect(() => {
    //Ligando ou Desligando a lanterna
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(()=> {
    //Quando o componente for chacoalhado, muda-se o toggle
    const subscription = RNShake.addListener(()=>{
      setToggle(oldToggle => !oldToggle);
    });
    //Quando o componente for chacoalhado, muda-se o toggle
    return () => subscription.remove();
  });


  return (
  <View style ={ toggle ? style.containerLight :style.container}>
    <TouchableOpacity onPress={handleChangeToggle}>
      <Image 
        style = {toggle? style.lightingOn : style.lightingOff}
        source = {
          toggle
          ?imagey
          :imagex
        }
        />
        <Image 
        style = {toggle? style.lightingOn : style.lightingOff}
        source = {
          toggle
          ?imageDIOy
          :imageDIOx
        }
        />
      </TouchableOpacity>
  </View> 
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain', //Mesmo imagem sendo maior que o local, ela se adequa para não transbordar.
    alignSelf: 'center', 
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white', 
    width: 150,
    height: 150,
  },

});