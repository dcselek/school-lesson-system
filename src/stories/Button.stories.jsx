import React from 'react';
import MainButton from '../components/buttons/MainButton';

export default {
  title: 'Components/Buttons',
  argTypes: {
    kind: {
      options: ["danger", "secondary", "primary"],
      control: { type: "select" }
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" }
    }
  }
};

const TemplateCarbonButton = (args) => <MainButton {...args}/>

export const Carbon = TemplateCarbonButton.bind({});
Carbon.args = {
  label: "Main Button"
}