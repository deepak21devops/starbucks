import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
const Container = styled.div`
width: 100%;
height: 100vh;
`


const HomePage = () => {
    return (
        <div>
            <Container>
                <NavBar/>
            </Container>
            
        </div>
    )
}

export default HomePage
