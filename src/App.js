import React, { Component } from 'react'
import { connect } from 'react-redux'
import TasksPage from './components/TasksPage'
import { createTask, editTask } from './actions'

class App extends Component {
  onCreateTask = ({ title, description }) => {
    this.props.dispatch(createTask({ title, description }))
  }
  onStatusChange = (id, status) => {
    this.props.dispatch(editTask(id, { status }))
  }

  render () {
    console.log('props from App: ', this.props)
    return (
      <div className='main-content'>
        <TasksPage
          onStatusChange={this.onStatusChange}
          onCreateTask={this.onCreateTask}
          tasks={this.props.tasks} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App)
