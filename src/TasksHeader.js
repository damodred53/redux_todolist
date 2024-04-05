import { useSelector } from "react-redux";

const TasksHeader = () => {
  
  const Tasks = useSelector((state) => state.todo);

  const undoneTasks = Tasks.filter((task) => task.done === false)

  return (
    <header>
      <h1>React Todo List</h1>
      <p>
        Tâches à faire : <strong>{undoneTasks.length}</strong>
      </p>
    </header>
  );
};

export default TasksHeader;
