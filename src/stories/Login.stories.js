import React from 'react'

import LoginForm from '../components/login/LoginForm'

export default {
    title: "Components/Login"
}

const TemplateLoginForm = (args) => <LoginForm />

export const Login = TemplateLoginForm.bind({});