import { Grid, Row } from 'carbon-components-react'
import React from 'react'
import LessonsTable from '../components/tables/LessonsTable';

export default function LessonsListPage() {
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

    const rows = [
        {
          id: '1',
          name: 'Repo 1',
          createdAt: 'Date',
          updatedAt: 'Date',
          issueCount: '123',
          stars: '456',
          links: 'Links',
        },
        {
          id: '2',
          name: 'Repo 2',
          createdAt: 'Date',
          updatedAt: 'Date',
          issueCount: '123',
          stars: '456',
          links: 'Links',
        },
        {
          id: '3',
          name: 'Repo 3',
          createdAt: 'Date',
          updatedAt: 'Date',
          issueCount: '123',
          stars: '456',
          links: 'Links',
        },
      ];
    return (
        <>
            <Grid>
                <Row>
                    <LessonsTable headers={headers} rows={rows} />
                </Row>
            </Grid>
        </>
    )
}
