import React, { Component } from 'react';
import TasksPage from './components/TasksPage'

const mockTasks = [
  {
    id: 1,
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'In progress'
  },
  {
    id: 2,
    title: 'Peace on Earth',
    description: 'No big deal.',
    status: 'In progress'
  }
]

class App extends Component {
  render() {
    return (
      <div className='main-content'>
        <TasksPage tasks={mockTasks} />
      </div>
    );
  }
}

export default App;
