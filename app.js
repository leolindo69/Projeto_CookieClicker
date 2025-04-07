import React,{userstate} from 'react'
import {view,text,touchaleOpacity,styleSheet} from

export default function App(){
//CRIANDO A VARIAVEL PARA ARMAZENAR A QUANTIDADE DE CLICKS
const[Pontos,Setpontos] = () => {
Setpontos(pontos + 1);
}
//PARTE VISUAL DO APLICATIVO 
Return(
<view style={styles.container}>
//exibir a quantidade de cookies na tela 
<text style=(styles.text)cookies:{cookies}</text>
  {//botão para clicar e aumentar os cookies//}
  <TouchableOpacity style={styles.button} onPress={handleClick}>
    <Text style={styles.buttonText}>Clique para ganhar cookies!</text>
    </TouchableOpacity> 
    </View>
    );
  }
//estilos para os componentes de interfaces
const style =StyleSheet.create({
  container: {
    flex:1
    justifyContent: 'center',
  alignItens:'center'
  backgroundColor:'#f8f8f8',
    },
text:{
  front:24
  margiBottom:20,
    },
buttonText:{
  fronteSize:18
  color:'#fff',
  fontWeight: 'bold',
    },
}),
