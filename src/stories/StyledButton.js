import React from 'react'
import styled from 'styled-components'
import { Button as CarbonButton } from 'carbon-components-react';

const Button = styled(CarbonButton)`
        border: 2px solid red
    `;

export default function StyledButton({ label, ...props }) {
    return (
        <div>
            <Button {...props}> {label} </Button>
        </div>
    )
}
