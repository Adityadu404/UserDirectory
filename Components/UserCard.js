import { Pressable, StyleSheet, Text,Image, View ,Dimensions} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const deviceWidth = Dimensions.get('window').width

export default function UserCard({item}) {

    const navigation = useNavigation()
    const randomNum = (Math.floor(Math.random() * 100) + 100).toString()

  return (
    <Pressable 
    style={({pressed})=> [pressed && styles.pressed , styles.item]}
    onPress={()=> navigation.navigate('UserDetails',{ UserID : item.id})}
    >
    <Image 
    source={{uri:`https://picsum.photos/${randomNum}`}}
    style={styles.image}
    />
    <View style={styles.info}>
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.mail}>{item.email}</Text>
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    item:{
        paddingVertical:8,
        paddingHorizontal:12,
        margin:7,
        backgroundColor:'white',
        width:deviceWidth *0.9,
        borderRadius:16,
        elevation:4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
        flexDirection:'row',
        alignItems:'center',
    },
    name:{
        fontSize: deviceWidth < 400 ? 20 : 25,
        fontWeight:'bold',
    },
    mail:{
        fontSize: deviceWidth <400 ? 15 : 20,
        color: '#6c757d',
    },
    pressed:{
        opacity:0.5
    },
    image:{
        width:deviceWidth <400 ? 50 : 60,
        height:deviceWidth <400 ? 50 : 60,
        borderRadius:30,
        elevation:4
    },
    info:{
        paddingVertical:8,
        paddingHorizontal:15,
    }
})