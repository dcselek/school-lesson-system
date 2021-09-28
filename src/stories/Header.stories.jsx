import React from 'react';

import Header from '../components/header/Header';

export default {
    title: "Components/Header",
    argTypes: {
        login: {
            control: { type: "boolean" }
        }
    }
};

const TemplateHeader = (args) => <Header {...args} />

export const HeaderBase = TemplateHeader.bind({});