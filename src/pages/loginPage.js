import React from 'react'
import LoginForm from '../components/login/LoginForm'
import { Grid, Row, Column } from 'carbon-components-react'



export default function LoginPage() {
    return (
        <Grid>
            <Row>
                <Column></Column>
                <Column>
                    <LoginForm />
                </Column>
                <Column></Column>
            </Row>
        </Grid>
    )
}
