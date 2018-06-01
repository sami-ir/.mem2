import React from 'react'
import styled from 'styled-components'
import { media, container } from '../styles'

export default ({children}) => (
  <Hero>
    <Container>
	    {children}
    </Container>
  </Hero>
)

const Hero = styled.section`
  background-color: #eef4f8;
  padding-top: 222px;
  padding-bottom: 166px;
`

const Container = styled.div`
	${container}
`