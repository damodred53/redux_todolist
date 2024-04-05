import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleTask, deleteTask, addTask } from "./redux";


const TaskItem = (props) => {
  const { task} = props;

  const dispatch = useDispatch();

  console.log(task)




  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        {task.text}

        <span
          onClick={() => dispatch(deleteTask(task.id))}
          role="button"
          style={{ padding: "5px", marginLeft: "20px" }}
        >
          X
        </span>
      </label>
    </div>
  );
};

export default TaskItem;
