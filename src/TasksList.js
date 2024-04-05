import TaskItem from "./TaskItem";
import {useSelector} from "react-redux";
import {store} from "./redux.js";

const TasksList = () => {

  const tasks = useSelector(state => state.todo)

  return (
    <>
      {tasks.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
        />
      ))}
    </>
  );
};

export default TasksList;
