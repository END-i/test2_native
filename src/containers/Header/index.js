import React from 'react'
import { View, Text } from 'react-native'

const Header = () => {
  return (
    <Wrapper>
      <Text>Logo</Text>
      <Text>User</Text>
      <Text>Log Out</Text>
    </Wrapper>
  )
}

export default Header


import styled from 'styled-components'

export const Wrapper = styled.View`
  background: #0e3d88d1;
  flex-direction: row;
`