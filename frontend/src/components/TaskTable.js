import React from "react";
import { tasksFetch } from "../services/fetchApi";

class TaskTable extends React.Component {
  constructor () {
    super();
    this.state = {
      taskList: [],
    };
  }

  fetchTasks = () => {
    tasksFetch().then((taskList) => {
      console.log(taskList);
      this.setState({
        taskList,
      });
    })
  }

  componentDidMount () {
    this.fetchTasks();
  }

  render () {
    const { taskList } = this.state;

    return (
      <table>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Status</th>
            <th>Usuário</th>
          </tr>
        </thead>
        <tbody>
          { taskList.map((taskItem) => {
            const { task, status, userId } = taskItem;
            return (
              <tr key={ task }>
                <td>{ task }</td>
                <td>{ status }</td>
                <td>{ userId }</td>
              </tr>
            );
          }) }
        </tbody>
      </table>
    );
  }
}

export default TaskTable;