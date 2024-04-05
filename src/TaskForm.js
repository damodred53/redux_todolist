import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {store} from "./redux.js";

const TaskForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();

    const textForm = document.querySelector('.text_form')
    console.log(textForm.value.length)
    if (textForm.value.length === 0) {
      alert("Vous devez remplir le champ des taches avant de le valider");
      return
    }

    console.log(event.target);

    dispatch({
      type : "todo/addTask",
      payload : text
    })

    setText("");

    
    if (textForm) {
      textForm.value = "";
    }
  };

  const  handleChange = (e) => {
    const value = e.target.value
    setText(value)
  }



  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input 
      className="text_form"
        type="text"
        placeholder="Ajouter une tâche"
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
};

export default TaskForm;
