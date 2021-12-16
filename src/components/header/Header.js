import React from 'react'
import { Header as HeaderBase, HeaderName, HeaderNavigation, HeaderMenuItem, HeaderContainer, HeaderGlobalBar, HeaderGlobalAction, SideNav, SideNavLink, SideNavItems } from 'carbon-components-react'
import useAuth from '../../context/AuthContext'
import { useHistory, Link } from 'react-router-dom';
import { Logout32 } from '@carbon/icons-react';
import styled from 'styled-components';
import { DotMark32 } from '@carbon/icons-react';
import PropTypes from "prop-types"

const StyledLink = styled(Link)`
    text-decoration: none;
    color: aliceblue;
`

export default function Header({ Content, userType, authed }) {
    const { logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {

        const response = await fetch("/me", {
            method: "GET", headers: {
                'Content-Type': 'application/json'
            }
        })

        const status = await response.status

        if (status === 403) {
            logout();
            history.push("/");
        }
    }

    return (
        <HeaderContainer render={() => (
            <>
                <HeaderBase aria-label="DCS Header">
                    <HeaderName href="#" prefix="DCS">
                        School System
                    </HeaderName>
                    {authed === true &&
                        <>
                            <HeaderNavigation aria-label="DCS Header Navigation">
                                <HeaderMenuItem>Profile</HeaderMenuItem>
                                {userType === "teacher" &&
                                    <>
                                        <HeaderMenuItem id="students-nav-button"><StyledLink to="/main/students">Students</StyledLink></HeaderMenuItem>
                                        <HeaderMenuItem><StyledLink to="/main/lessons">Lessons</StyledLink></HeaderMenuItem>
                                    </>
                                }
                            </HeaderNavigation>
                            <HeaderGlobalBar>
                                <HeaderGlobalAction aria-label="logout" onClick={handleLogout} >
                                    <Logout32 />
                                </HeaderGlobalAction>
                            </HeaderGlobalBar>
                            <SideNav color="    " aria-label="Side Navigation">
                                <SideNavItems>
                                    <SideNavLink renderIcon={DotMark32} href="#">Link</SideNavLink>
                                    <SideNavLink renderIcon={DotMark32} href="#">Link</SideNavLink>
                                    <SideNavLink renderIcon={DotMark32} href="#">Link</SideNavLink>
                                </SideNavItems>
                            </SideNav>
                        </>
                    }
                </HeaderBase>
                {Content}
            </>
        )} />
    )
}

Header.propTypes = {
    authed: PropTypes.bool,
    userType: PropTypes.string,
    Content: PropTypes.element
}