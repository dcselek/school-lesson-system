import { Column, Grid, Row } from 'carbon-components-react';
import React, { useEffect } from 'react'
import GenderCharts from '../components/charts/GenderCharts';
import LessonChart from '../components/charts/LessonChart';

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
                    <Column></Column>
                    <Column>
                        <GenderCharts />
                    </Column>
                    <Column>
                        <LessonChart />
                    </Column>
                    <Column></Column>
                </Row>
            </Grid>
        </>
    )
}
