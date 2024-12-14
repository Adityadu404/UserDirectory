import {StyleSheet,FlatList, ActivityIndicator } from 'react-native'
import React,{useState, useEffect} from 'react'

import { GetUserData } from '../Util/http'
import UserCard from './UserCard'


export default function List() {
    const [loading , setLoading] = useState(false)
    const [user, setUser]= useState(null)
    const [error, setError] = useState(null)
  
      useEffect(()=>{
        async function fetchUserData() {
          setLoading(true)
          try{
          const data = await GetUserData()
          setUser(data)
          setError(null)
          }catch(err){
            setError('Unable to fetch data, please try again later')
          }finally{
          setLoading(false)          
          }
        }
  
        fetchUserData()
      },[])
  
      function renderUser({item}){
        return(
        <>
        {loading && <ActivityIndicator size='large' color='blue' />}
        {error && <Text style={styles.errorText}>{error}</Text>}
            <UserCard item={item}/>
          </>
          )
      }
  return (
    <FlatList
    data={user}
    renderItem={renderUser}
    keyExtractor={(item)=>item.id.toString()}
    />
  )
}

const styles = StyleSheet.create({
  errorText:{
    color:'red',
    fontSize:20,
    fontWeight:'bold'
  }
})
