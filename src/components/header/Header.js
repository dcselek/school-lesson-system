import React from 'react'
import { Header as HeaderBase, HeaderName, HeaderNavigation, HeaderMenuItem, HeaderContainer } from 'carbon-components-react'

export default function Header({ login }) {
    return (
        <HeaderContainer render={() => (
            <HeaderBase>
                <HeaderName href="#" prefix="DCS">
                    School System
                </HeaderName>
                {login &&
                    <HeaderNavigation>
                        <HeaderMenuItem>Profile</HeaderMenuItem>
                        <HeaderMenuItem>Lessons</HeaderMenuItem>
                        <HeaderMenuItem>Students List</HeaderMenuItem>
                    </HeaderNavigation>
                }
            </HeaderBase>
        )} />
    )
}
