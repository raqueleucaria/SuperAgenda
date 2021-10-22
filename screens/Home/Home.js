import React from 'react';
import { Image, StyleSheet ,View, Text, ScrollView } from 'react-native';
import BoxChat from './layouts/Box';
import  FlatList from './../ToDo/ToDo';



/*
---------------------------------------------------------------------------------------------------------
                    **  TROCAR A COR DOS QUADRADOS PARA BRANCO
                        APÓS OS TESTES
                    **  COLOCAR O NOTEBOOKBACKGROUND NA MESMA POSIÇÃO DO MAIN
---------------------------------------------------------------------------------------------------------
*/
export default function Home({  }) {
  return (
    <>
    <Main />
    {/* <NotebookBackground /> */}
    </>
  );
}

/*
---------------------------------------------------------------------------------------------------------
                            Funções
---------------------------------------------------------------------------------------------------------
*/

const Main = () => {
  return(
    
    <View style={styles.container1}>
      <Image 
            source={require('../../assets/marcador.png')}
            style={styles.Logo}
      />
      <View style={styles.container}>

        <View style={styles.shadows}>
            <BoxChat 
              color='#FFF'
              event01='Eventos Próximos: '
              event02='04/07 - PROVA 01 - Cálculo' event1={undefined} event2={undefined} 
              
            />
        </View>

        <ScrollView style={styles.flat}>
          
            <FlatList/>
             
          
        </ScrollView>
      
      </View>
    </View>
    
  )
}

const NotebookBackground = () => {
  return(
    <View>
      <Image 
        source={require('../../assets/notebook.jpg')}
        style={styles.background}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  flat: {
    
    height: 40,
    width: 250,
    // paddingVertical: 30,
    // paddingHorizontal: 30,

  },
  container1: {
    flex: 1,
    justifyContent: 'center',
  },
  shadows: {
    borderRadius: 15,
    shadowOpacity: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    marginVertical: 10,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    //backgroundColor: 'E5E5E5',
  },
  Logo: {
    //alignItems:'stretch',
    //justifyContent:'space-between',
    //right: '10%',
    height: '10%',
    width: '65%',
    marginTop: 25,
    marginVertical: 20,
    
  },
  background:{
    height: '100%',
    width: '100%',
    position:'absolute',
  }
});
