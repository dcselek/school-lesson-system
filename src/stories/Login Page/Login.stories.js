import React from 'react'

import LoginForm from '../../components/login/LoginForm'

export default {
    title: "Pages/Login Page/Components"
}

const TemplateLoginForm = (args) => <LoginForm {...args} />

export const Login = TemplateLoginForm.bind({});