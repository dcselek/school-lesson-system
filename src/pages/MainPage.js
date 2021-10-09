import { Grid, Row } from 'carbon-components-react';
import React, { useEffect } from 'react'
import GenderCharts from '../components/charts/GenderCharts';

export default function MainPage() {
    useEffect(() => {
        function authMe() {
            fetch("/me", {
                method: "GET", headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 123'
                }
            })
        }

        authMe();
    }, [])

    return (
        <>
        <Grid>
            <Row>
                <GenderCharts />
            </Row>
        </Grid>
        </>
    )
}
