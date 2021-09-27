import React from 'react';

import { CarbonButton } from './CarbonButton';
import StyledButton from './StyledButton';

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

const TemplateCarbonButton = (args) => <CarbonButton {...args}/>
const TemplateStyledButton = (args) => <StyledButton {...args} />

export const Styled = TemplateStyledButton.bind({});
Styled.args = {
  label: "Styled Button"
}
export const Carbon = TemplateCarbonButton.bind({});
Carbon.args = {
  label: "Carbon Button"
}

// const Template = (args) => <CarbonButton {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   label: 'Button',
// };
