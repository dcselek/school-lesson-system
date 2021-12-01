import { Column, Grid, Row } from 'carbon-components-react';
import React, { useEffect } from 'react'
import GenderCharts from '../components/charts/GenderCharts';
import LessonChart from '../components/charts/LessonChart';
import useAuth from '../context/AuthContext'

export default function MainPage() {
    const { userTypeHandler } = useAuth();
    useEffect(() => {
        userTypeHandler();
    })

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
