import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import LoginForm from '../../components/login/LoginForm'
import { AuthProvider } from '../../context/AuthContext'

export default {
    title: "Components/LoginForm"
}

const TemplateLoginForm = (args) => <Router><AuthProvider><LoginForm {...args} /></AuthProvider></Router>

export const Login = TemplateLoginForm.bind({});