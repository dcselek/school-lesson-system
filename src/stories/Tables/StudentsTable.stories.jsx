import React from 'react';
import StudentsTable from '../../components/tables/StudentsTable';

export default {
  title: 'Components/Tables',
};

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

const rows = [
  {
    id: '123',
    firstName: 'Doğan Can',
    lastName: 'Selek'
  },
  {
    id: '1234',
    firstName: 'Doğan Can',
    lastName: 'Selek'
  },
  {
    id: '12345',
    firstName: 'Doğan Can',
    lastName: 'Selek'
  },
]

const TemplateStudentsTable = () => <StudentsTable headers={headers} rows={rows} />

export const StudentsTableA = TemplateStudentsTable.bind({});
