import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../context/AuthContext'
import { Button, FormGroup, TextInput } from 'carbon-components-react'
import styled from 'styled-components'

const LoginFormContainer = styled.div`
    width: 400px;
`

const Login = styled(FormGroup)`
    border: 1px solid red;
    padding: 20px;
`
const LoginButton = styled(Button)`
    text-decoration: none;
`

export default function LoginForm() {
    const navigate = useNavigate();
    const { login, UserInfoAuth, setUserInfoAuth } = useAuth();

    function handleLogin() {
        login().then(() => {
            navigate("/main");
        })
    };

    return (
        <LoginFormContainer>
            <Login legendText="Login">
                <TextInput
                    id="username"
                    labelText="Username"
                    onChange={e => setUserInfoAuth({ ...UserInfoAuth, username: e.target.value })}
                />
                <TextInput
                    id="password"
                    labelText="Password"
                    type="password"
                    onChange={e => setUserInfoAuth({ ...UserInfoAuth, password: e.target.value })}
                />
            </Login>
            <LoginButton kind="danger" onClick={handleLogin}>Login</LoginButton>
        </LoginFormContainer>
    )
}
