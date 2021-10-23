import { Grid, DataTableSkeleton, Row, Column } from 'carbon-components-react'
import React, { useState, useEffect } from 'react'
import LessonsTable from '../components/tables/LessonsTable';

export default function LessonsListPage() {
    const [lessons, setLessons] = useState(null);

    const headers = [
        {
            key: 'id',
            header: 'ID',
        },
        {
            key: 'lessonCode',
            header: 'Lesson Code',
        },
        {
            key: 'name',
            header: 'Name',
        },
        {
            key: 'value',
            header: 'Member',
        }
    ];

    useEffect(() => {
        async function lessonData() {
            const response = await fetch("/lessons", {
                method: "GET", headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            setLessons(data);
        }

        lessonData();
    }, [])

    return (
        <>
            <Grid>
                <Row>
                    <Column lg={2} />
                    <Column>
                        {lessons === null ?
                            <DataTableSkeleton
                                columnCount={headers.length + 1}
                                rowCount={4}
                                headers={headers}
                            /> :
                            <LessonsTable headers={headers} rows={lessons} />
                        }
                    </Column>
                </Row>
            </Grid>
        </>
    )
}
