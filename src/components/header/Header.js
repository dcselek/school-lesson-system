import React from 'react'
import { Header as HeaderBase, HeaderName, HeaderNavigation, HeaderMenuItem, HeaderContainer, HeaderGlobalBar, HeaderGlobalAction } from 'carbon-components-react'
import useAuth from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { Logout32 } from '@carbon/icons-react';

export default function Header() {
    const { logout, authed } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {

        const response = await fetch("/me", {
            method: "GET", headers: {
                'Content-Type': 'application/json'
            }
        })

        const status = await response.status

        if (status === 403) {
            logout();
            navigate("/");
        }
    }

    return (
        <HeaderContainer render={() => (
            <HeaderBase>
                <HeaderName href="#" prefix="DCS">
                    School System
                </HeaderName>
                {authed &&
                    <>
                        <HeaderNavigation>
                            <HeaderMenuItem>Profile</HeaderMenuItem>
                            <HeaderMenuItem>Lessons</HeaderMenuItem>
                            <HeaderMenuItem>Students List</HeaderMenuItem>
                        </HeaderNavigation>
                        <HeaderGlobalBar>
                            <HeaderGlobalAction aria-label="logout" onClick={handleLogout} >
                                <Logout32 />
                            </HeaderGlobalAction>
                        </HeaderGlobalBar>
                    </>
                }
            </HeaderBase>
        )} />
    )
}
