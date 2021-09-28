import React from 'react'
import { Button, FormGroup, TextInput } from 'carbon-components-react'
import styled from 'styled-components'

const Login = styled(FormGroup)`
    max-width: 400px;
    border: 1px solid red;
    padding: 20px;
`

export default function LoginForm() {
    return (
        <div>
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
        </div>
    )
}
