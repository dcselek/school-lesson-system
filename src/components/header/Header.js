import React from 'react'
import { Header as HeaderBase, HeaderName, HeaderNavigation, HeaderMenuItem } from 'carbon-components-react'

export default function Header({ login }) {
    return (
        <HeaderBase>
            <HeaderName href="#" prefix="DCS">
                School System
            </HeaderName>
            {login &&
                <HeaderNavigation>
                    <HeaderMenuItem>Main</HeaderMenuItem>
                    <HeaderMenuItem>Lessons</HeaderMenuItem>
                </HeaderNavigation>
            }
        </HeaderBase>
    )
}
