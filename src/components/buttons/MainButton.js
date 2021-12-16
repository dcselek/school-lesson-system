import React from 'react'
import { Button } from 'carbon-components-react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled(Button)`
    text-decoration: none;
`
const ButtonWrapper = styled.div``

export default function MainButton({ label, kind, size, ...props }) {
    return (
        <ButtonWrapper>
            <StyledButton kind={kind} size={size} {...props} >{label}</StyledButton>
        </ButtonWrapper>
    )
}

MainButton.propTypes = {
    label: PropTypes.string,
    kind: PropTypes.string,
    size: PropTypes.string
}