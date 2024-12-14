import { ActivityIndicator, StyleSheet, Text, View ,Dimensions} from 'react-native'
import React, {useState,useEffect } from 'react'

import { GetUserData } from '../Util/http'

const deviceWidth= Dimensions.get('window').width

export default function UserDetails({id}) {
    
    const [user, setUser]= useState(null)
    const [loading , setLoading] = useState(false)
    const [error, setError] = useState(null)
  
    useEffect(()=>{
        async function fetchUserData() {
          setLoading(true)
          try{
          const data = await GetUserData()
          const currentUser = data.find((item)=> item.id == id)
          setUser(currentUser)
          setError(null)
          }catch(err){
            setError('Unable to find User Details')
          }finally{
            setLoading(false)
          }
        }
    fetchUserData()
    },[])

    
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size='large' color='blue' />}
      {error && <Text style={styles.errorText}>{error}</Text>}
        {user && (
        <>
          <Text style={styles.title}>{user.name}</Text>
          <Text style={styles.details}>Email: {user.email}</Text>
          <Text style={styles.details}>
            Address: {user.address.street}, {user.address.city} , {user.address.zipcode}
          </Text>
          <Text style={styles.details}>Company name: {user.company.name}</Text>
        </>
      ) }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      borderRadius: 18,
      padding: 20,
      elevation: 4,
      shadowColor: '#000',
      shadowOpacity: 0.15,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 3 },
      },
      title: {
        fontSize: deviceWidth < 400 ? 25 :30,
        fontWeight: 'bold',
        marginBottom:5
      },
      details: {
        fontSize: deviceWidth < 400 ? 20 : 25,
        color: '#495057',
        marginBottom:1
      },
      errorText:{
        color:'red',
        fontSize:deviceWidth < 400 ? 15 :20,
        fontWeight:'bold'
      }
})