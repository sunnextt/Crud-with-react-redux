import React from 'react'
import CrudTask from './CrudTask/CrudTask'
import TaskWrapper from './CrudTask/styled';
import Tasks from './Task';

const TaskPage = () => {
  return (
      <TaskWrapper>
          <CrudTask />
          <Tasks/>
      </TaskWrapper>
  );
}

export default TaskPage