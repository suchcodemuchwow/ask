import React from 'react'
import { Pressable, Text } from 'react-native'

export function Button() {
  return (
    <Pressable style={{ backgroundColor: '#550b2f', alignItems: 'center' }}>
      <Text>Fancy Button</Text>
    </Pressable>
  )
}
