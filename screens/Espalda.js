import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import Espalda2 from '../images/espalda.jpg'
import firebase from '../database/firebase'
const Espalda = () => {
    const [users , setUsers] = useState([])

    useEffect(() => {
        firebase.db.collection('espalda').onSnapshot((querySnapshot)=>{
            const users = []
            querySnapshot.docs.forEach((doc)=>{
                const { title, subtitle, avatar } = doc.data()
                users.push({
                    id: doc.id,
                    title,
                    subtitle,
                    avatar,
                })
            })
            setUsers(users);
        })
    }, []);
    return (
      <ScrollView>
        <View>
          <ImageBackground style={styles.imagen} source={Espalda2}>
            <Text style={styles.texto}>Espalda en casa</Text>
          </ImageBackground>
        </View>

        <View>
          <Text style={styles.primer}>6 ejercicios - 20 min.</Text>
        </View>

        <View>
          {/* aqui comienza la lista */}
          {users.map((user) => (
            <ListItem bottomDivider key={user.id}>
              <ListItem.Chevron />
              <Avatar style={styles.avatar} source={{ uri: user.avatar }} />
              <ListItem.Content>
                <ListItem.Title style={styles.titulo}>
                  {user.title}
                </ListItem.Title>
                <ListItem.Subtitle>{user.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      </ScrollView>
    );
}
const styles = StyleSheet.create({
    imagen:{
        height:100,
        width:400
    },
    texto:{
        color:'white',
        fontSize:28,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:20
    },
    avatar:{
        height:80,
        width:100
    },
    titulo:{
        fontWeight:'bold'
    },
    primer:{
        fontSize:18,
        fontWeight:'bold',
        padding:10
    },
    cabeza:{
        backgroundColor:'#2C5364',
        height:5,
        width:400
    },
});
export default Espalda
