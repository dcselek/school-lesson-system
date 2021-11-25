import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../components/header/Header';
import { AuthProvider } from '../context/AuthContext';

export default {
    title: "Components/Header",
    argTypes: {
        authed: {
            control: { type: "boolean" }
        },
        userType: {
            options: ["student", "teacher"],
            control: { type: "radio" }
        }
    }
};

const TemplateHeader = (args) => <Router><AuthProvider><Header Content={<></>} {...args} /></AuthProvider></Router>

export const HeaderBase = TemplateHeader.bind({});