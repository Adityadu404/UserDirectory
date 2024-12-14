import { StyleSheet, View } from 'react-native'
import React from 'react'

import UserDetails from '../Components/UserDetails'

export default function UserDetailScreen({route}) {
  const id = route.params.UserID
  return (
    <View style={styles.container}>
      <UserDetails id={id}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f9fa',
      justifyContent: 'center',
      padding: 20,
      },
})