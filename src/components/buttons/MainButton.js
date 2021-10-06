import React from 'react'
import { Button } from 'carbon-components-react'
import styled from 'styled-components'

const StyledButton = styled(Button)`
    text-decoration: none;
`
const ButtonWrapper = styled.div``

export default function MainButton({label, kind, size, ...props}) {
    return (
        <ButtonWrapper>
            <StyledButton kind={kind} size={size} {...props} >{label}</StyledButton>
        </ButtonWrapper>
    )
}
