import React, {useState} from 'react'
import {Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Alert} from 'react-native'
import Roberta from '../images/Roberta.jpg'
import Michel from '../images/michell.jpeg'
import firebase from '../database/firebase'

const Contact = () => {
    const inicialValues = {
        nombre:'',
        apellido:'',
        edad:'',
        email:''
    }
    const [estado, setEstado]=useState(inicialValues)

    const handleChange = (name, value)=>{
        setEstado({...estado, [name]:value})
    }

    const saveInfor = async ()=>{
        if (estado.nombre === ''){
            alert('porfavor ingrese un nombre')
        }
        else{
            try{
                await firebase.db.collection('contacto').doc().set({
                    nombre: estado.nombre,
                    apellido:estado.apellido,
                    edad:estado.edad,
                    email:estado.email
                });
                setEstado({...inicialValues});
                Alert.alert(
                    "Felicitaciones",
                    "Te contactaremos a la brevedad posible",
                    [
                      {
                        text: "Ok",
                        style: "cancel",
                      },
                    ],)
            }
            catch(error){
                console.log(error);
            }
        }
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={Michel} style={styles.imagen} >
                <Text style={styles.texto1}>Envianos tu informacion y nosotros te contactaremos</Text>

                <View style={styles.view}>
                    <TextInput placeholder='NOMBRE' style={styles.input} placeholderTextColor='slategray' textAlign='center'
                    onChangeText={(value)=>handleChange('nombre', value)} value={estado.nombre} />
                </View>

                <View style={styles.view}>
                    <TextInput placeholder='APELLIDOS' style={styles.input} placeholderTextColor='slategray' textAlign='center'
                    onChangeText={(value)=>handleChange('apellido', value)} value={estado.apellido} />
                </View>

                <View style={styles.view}>
                    <TextInput placeholder='EDAD' style={styles.input} keyboardType='number-pad' placeholderTextColor='slategray' textAlign='center' 
                    onChangeText={(value)=>handleChange('edad', value)} value={estado.edad} />
                </View>

                <View style={styles.view}>
                    <TextInput placeholder='EMAIL' style={styles.input} keyboardType='email-address' placeholderTextColor='slategray' textAlign='center'
                    onChangeText={(value)=>handleChange('email', value)} value={estado.email} />
                </View>

                <View>
                    <TouchableOpacity style={styles.boton} onPress={()=>saveInfor()} >
                        <Text style={styles.textoBoton}>ENVIAR</Text>
                    </TouchableOpacity>
                </View>
                
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    imagen:{
        flex:1,
        resizeMode:'cover',
        justifyContent:'center',
    },
    texto1:{
        color:'white',
        textAlign:'center',
        fontSize:20,
        marginBottom:20,
        fontWeight:'bold'
        },

    input:{
        color:'white',
        fontWeight:'bold',
        backgroundColor:'transparent',
        padding:0,
        height:40,
        borderWidth:2,
        borderColor:'white',
        borderRadius:10        
    },
    view:{
        padding:10
    },
    boton:{
        paddingTop:20,
        paddingLeft:30,
        paddingRight:30
    },
    textoBoton:{
        color:'white',
        backgroundColor:'#2C5364',
        padding:15,
        borderRadius:10,
        textAlign:'center',
        fontWeight:'bold'
    }
})

export default Contact
