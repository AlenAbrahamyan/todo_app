import { useDispatch } from "react-redux";
import { useState } from "react";

const AddForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const addNewTodo = (newTodo) => {
    if (newTodo !== "") {
      dispatch({
        type: "add-new-todo",
        payload: newTodo,
      });
    }
  };

  return (
    <>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addNewTodo(newTodo);
            setNewTodo("");
          }
        }}
      />
      {newTodo !== "" && (
        <button
          type="submit"
          onClick={() => {
            addNewTodo(newTodo);
            setNewTodo("");
          }}
        >
          Add
        </button>
      )}
    </>
  );
};

export default AddForm;
