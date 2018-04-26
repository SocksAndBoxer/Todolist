/*
 * NPM import
 */
import React from 'react';

/*
 * Local import
 */
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';

/*
 * Code
 */

const data = [

];

class App extends React.Component {

  state = {
    tasks: [
      {
        id: 1,
        label: 'farine',
        done: true,
      },
      {
        id: 2,
        label: 'lait',
        done: false,
      },
      {
        id: 3,
        label: 'sucre',
        done: false,
      },
    ],
  }

  addTask = () => {
    const allIds = this.state.tasks.map(task => task.id);
    const newId = Math.max(...allIds) + 1;
    const label = document.getElementById('input').value;
    const task = {
      id: newId,
      label,
      done: false,
    };
    const tasks = [...this.state.tasks, task];
    this.setState({ tasks });
  }

  checkTask = id => () => {
    const tasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    this.setState({ tasks });
  }


  render() {
    const { tasks } = this.state;
    const count = (tasks.filter(task => !task.done).length);
    return (
      <div id="app">
        <Form onAddTask={this.addTask} />
        <Counter count={count} />
        <Tasks tasks={tasks} onCheckTask={this.checkTask} />
      </div>
    );
  }
}

/*
 * Export
 */
export default App;
