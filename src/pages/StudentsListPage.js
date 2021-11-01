import { Grid, DataTableSkeleton, Row, Column } from 'carbon-components-react'
import React, { useState, useEffect } from 'react'
import StudentsTable from '../components/tables/StudentsTable'

export default function StudentsListPage() {
    const [students, setStudents] = useState(null);

    const headers = [
        {
            key: 'id',
            header: 'ID',
        },
        {
            key: 'firstName',
            header: 'First Name',
        },
        {
            key: 'lastName',
            header: 'Last Name',
        }
    ];

    useEffect(() => {
        async function studentData() {
            const response = await fetch("/user", {
                method: "GET", headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            setStudents(data);
        }

        studentData();
    }, [])

    return (
        <>
            <Grid>
                <Row style={{ marginTop: "30px" }}>
                    <Column lg={1} />
                    <Column>
                        {students === null ?
                            <DataTableSkeleton
                                columnCount={headers.length + 1}
                                rowCount={4}
                                headers={headers}
                            /> :
                            <StudentsTable headers={headers} rows={students} />
                        }
                    </Column>
                </Row>
            </Grid>
        </>
    )
}
