import React from 'react'
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import Woman from '../images/woman.jpg'
const Abs = () => {
    return (
      <ScrollView>
        {/* <View style={styles.cabeza}></View> */}
        <View>
          <ImageBackground style={styles.imagen} source={Woman}>
            <Text style={styles.texto}>Abdominales</Text>
          </ImageBackground>
        </View>

        <View>
          <Text style={styles.primer}>6 ejercicios - 20 min.</Text>
        </View>

        <View>
          <ListItem bottomDivider>
            <Avatar
              style={styles.avatar}
              source={{
                uri: "https://www.mundodeportivo.com/r/GODO/MD/p7/ContraPortada/Imagenes/2020/08/20/Recortada/img_sruiz_20200820-135037_imagenes_md_otras_fuentes_los_5_mejores_ejercicios_de_abdominales_para_un_six-pack_perfecto-ktsC-U482915514385gGD-980x554@MundoDeportivo-Web.JPG",
              }}
            />
            <ListItem.Content>
              <ListItem.Title style={styles.titulo}>Planchas</ListItem.Title>
              <ListItem.Subtitle>20 seg.</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </View>

        <View>
          <ListItem bottomDivider>
            <Avatar
              style={styles.avatar}
              source={{
                uri: "https://imagenes.lainformacion.com/files/article_amp/uploads/imagenes/2019/04/11/5caf178dbba70.jpeg",
              }}
            />
            <ListItem.Content>
              <ListItem.Title style={styles.titulo}>Crunch Abs</ListItem.Title>
              <ListItem.Subtitle>20 reps</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </View>

        <View>
          <ListItem bottomDivider>
            <Avatar
              style={styles.avatar}
              source={{
                uri: "https://i.pinimg.com/originals/eb/37/12/eb37125eef9484ef6a73b7cbaf1a9ad6.gif",
              }}
            />
            <ListItem.Content>
              <ListItem.Title style={styles.titulo}>
                Elevaciones de piernas
              </ListItem.Title>
              <ListItem.Subtitle>15 reps</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </View>

        <View>
          <ListItem bottomDivider>
            <Avatar
              style={styles.avatar}
              source={{
                uri: "https://cdn.sportadictos.com/files/2017/01/Ejercicios-abdominales.jpg",
              }}
            />
            <ListItem.Content>
              <ListItem.Title style={styles.titulo}>
                Tablón de lado
              </ListItem.Title>
              <ListItem.Subtitle>15 seg.</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </View>

        <View>
          <ListItem bottomDivider>
            <Avatar
              style={styles.avatar}
              source={{
                uri: "https://www.salud.mapfre.es/media/2019/07/ejercicios-abdominales.jpg",
              }}
            />
            <ListItem.Content>
              <ListItem.Title style={styles.titulo}>Twist Ruso</ListItem.Title>
              <ListItem.Subtitle>16 reps</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </View>

        <View>
          <ListItem bottomDivider>
            <Avatar
              style={styles.avatar}
              source={{
                uri: "https://mibebeyyo.elmundo.es/images/mujer-actual/abdominales-casa-escalador.webp",
              }}
            />
            <ListItem.Content>
              <ListItem.Title style={styles.titulo}>
                Escalada de Montaña
              </ListItem.Title>
              <ListItem.Subtitle>25 reps</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
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
export default Abs
