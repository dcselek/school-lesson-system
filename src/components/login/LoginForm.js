import React from 'react'
import { Button, FormGroup, TextInput } from 'carbon-components-react'
import styled from 'styled-components'

const LoginFormContainer = styled.div`
    width: 400px;
`

const Login = styled(FormGroup)`
    border: 1px solid red;
    padding: 20px;
`

export default function LoginForm() {
    return (
        <LoginFormContainer>
            <Login legendText="Login">
                <TextInput
                    id="username"
                    labelText="Username"
                />
                <TextInput
                    id="password"
                    labelText="Password"
                    type="password"
                />
            </Login>
            <Button kind="danger">Login</Button>
        </LoginFormContainer>
    )
}
