import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import Woman from '../images/woman.jpg'
import Brazo from '../images/brazo.jpg'
import Espalda from '../images/espalda.jpg'
import Pecho from '../images/pecho.jpg'
import Piernas from '../images/piernas.jpg'

const Home = (props) => {
    return (
        <ScrollView>
            <View style={styles.cabeza}>

            </View>

            {/* <View>
                <Text style={styles.titulo} >CUARENTENA EN CASA</Text>
            </View> */}

            <View >
                <TouchableOpacity style={styles.margenTouch} onPress={()=> props.navigation.navigate('abs')} >
                    <ImageBackground source={Woman} style={styles.imagen} >
                        <Text style={styles.texto}>ABDOMINALES PRINCIPIANTE</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.margenTouch} onPress={()=> props.navigation.navigate('pecho')} >
                    <ImageBackground source={Pecho} style={styles.imagen} >
                        <Text style={styles.texto}>PECHO PRINCIPIANTE</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.margenTouch} onPress={()=> props.navigation.navigate('brazos')} >
                    <ImageBackground source={Brazo} style={styles.imagen} >
                        <Text style={styles.texto}>BRAZOS PRINCIPIANTE</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.margenTouch} onPress={()=> props.navigation.navigate('pierna')} >
                    <ImageBackground source={Piernas} style={styles.imagen} >
                        <Text style={styles.texto}>PIERNAS PRINCIPIANTE</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.margenTouch} onPress={()=>props.navigation.navigate('hombroEspalda')} >
                    <ImageBackground source={Espalda} style={styles.imagen} >
                        <Text style={styles.texto}>HOMBROS Y ESPALDA PRINCIPIANTE</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.margenTouch} onPress={()=>props.navigation.navigate('contacto')} >
                    <ImageBackground source={{uri: 'https://cdn.euroinnova.edu.es/img/subidasEditor/instructor%20de%20gym-1611452143.webp'}} style={styles.imagen} >
                        <Text style={styles.texto1}>SI NECESITAS UNA ASESORIA CONTACTANOS</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    cabeza:{
        backgroundColor:'#2C5364',
        height:5,
        width:400
    },
    imagen:{
        height:200,
        width:400,
        borderRadius:50
    },
    texto:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        marginTop:20,
        paddingLeft:10
    },
    texto1:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        marginTop:20,
        padding:10
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:10,
        marginBottom:5
    },
    margenTouch:{
        marginTop:5,
        marginBottom:5,
        
    },
    
})
export default Home
