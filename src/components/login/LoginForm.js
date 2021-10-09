import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import useAuth from '../../context/AuthContext'
import { FormGroup, TextInput } from 'carbon-components-react'
import styled from 'styled-components'
import MainButton from '../buttons/MainButton'

const LoginFormContainer = styled.div`
    width: 400px;
`
const Login = styled(FormGroup)`
    border: 1px solid red;
    padding: 20px;
`
export default function LoginForm() {
    const history = useHistory();
    const location = useLocation();
    const { login, UserInfoAuth, setUserInfoAuth, isAuth } = useAuth();
    const { from } = location.state || { from: { pathname: "/main" } }
    async function handleLogin() {
        await login();
        isAuth() === true ? history.replace(from) : alert("token yok!");
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
            <MainButton kind="danger" onClick={handleLogin} label="Login" />
        </LoginFormContainer>
    )
}
