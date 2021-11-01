import React from 'react';
import LessonsTable from '../../components/tables/LessonsTable';

export default {
  title: 'Components/LessonsTable',
};

const TemplateLessonsTable = () => <LessonsTable />

export const LessonsTableA = TemplateLessonsTable.bind({});
