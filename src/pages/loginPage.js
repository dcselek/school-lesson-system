import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import LoginForm from '../components/login/LoginForm'

const LoginPageWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function LoginPage() {
    return (
        <LoginPageWrapper>
            <Header />
            <LoginForm />
        </LoginPageWrapper>
    )
}
