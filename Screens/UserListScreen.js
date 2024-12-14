import { StyleSheet, View ,Dimensions} from 'react-native'
import React, { useState } from 'react'

import SearchBar from '../Components/SearchBar'
import List from '../Components/List'

const deviceHeight = Dimensions.get('window').height


export default function UserListScreen() {

  const [ userFound , setUserFound ] = useState(null)

  function handleUserData(data){
    setUserFound(data)
  }
  return (
    <View style={styles.container}>
      <SearchBar onFindingUser={handleUserData}/>
      { !userFound && <List/>}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:deviceHeight<1000 ? 10 : 20,
    backgroundColor: '#f8f9fd',
  },
})