import {ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View ,Dimensions} from 'react-native'
import React, { useEffect, useState } from 'react'
import {Ionicons} from '@expo/vector-icons'
import { GetUserData } from '../Util/http'
import UserCard from './UserCard'

const deviceWidth = Dimensions.get('window').width

export default function SearchBar({onFindingUser}) {
  const [ enteredName , setEnteredName] = useState('')
  const [ user, setUser]= useState(null)
  const [ userFound, setUserFound]= useState(null)
  const [ error, setError] = useState(null)
  const [ loading, setLoading ]= useState(null)

  useEffect(()=>{
    async function fetchUserData() {
        setLoading(true)
        try{
          const data = await GetUserData()
          setUser(data)
          setError(null)
        }catch(err){
          setError('Unable to find user, please try again later or check the user name')
        }finally{
          setLoading(false)
        }        
        }
        fetchUserData()
  },[])

  useEffect(()=>{
    searchUser()
  },[enteredName])

  function searchUser(){
    if(enteredName.trim() === ''){
      onFindingUser(null)
      return
    }
    const found = user.find((item)=>item.name.toLowerCase() == enteredName.toLowerCase())
    setUserFound(found || null)
    onFindingUser(found)
    }

  return (
    <>
    <View style={styles.searchBox}>
    <Pressable 
      style={({pressed})=> [pressed && styles.pressed]}
      onPress={searchUser}
      >
      <Ionicons name='search' size={35}/>
      </Pressable>
      <TextInput style={styles.text} 
      value={enteredName}
      onChangeText={(text)=>{ setEnteredName(text)}}
      placeholder='Enter a user name ...'
      />
      
    </View>
    {loading && <ActivityIndicator size='large' color='blue' />}
    {error && <Text style={styles.errorText}>{error}</Text>}
    { userFound ? (<UserCard item={userFound}/>)
    :
    ( enteredName.length>0 && <Text style={styles.errorText}> User Not Found</Text>)}
</>
)
}

const styles = StyleSheet.create({
  searchBox:{
    backgroundColor:'#ffffff',
    width:deviceWidth*0.93,
    padding:8,
    margin:10,
    borderRadius:16,
    elevation:4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  text:{
    width:'90%',
    fontSize: deviceWidth < 400 ? 20 : 25,
    fontWeight:'600'
},
errorText:{
  color:'red',
  fontSize:deviceWidth < 400 ? 15 : 20,
  fontWeight:'bold'
}
})