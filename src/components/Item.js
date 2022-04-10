import { memo } from "react";
import { useDispatch } from "react-redux";

const Item = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className="todoItem">
      <span
        onClick={() => {
          dispatch({
            type: "change-completed-status",
            payload: {
              id: todo.id,
            },
          });
        }}
        style={todo.compleated ? { textDecoration: "line-through" } : null}
      >
        {todo.text}
      </span>

      <a
        href="/"
        className="deleteItemButton"
        onClick={(e) => {
          e.preventDefault();
          dispatch({
            type: "delete-item",
            payload: {
              id: todo.id,
            },
          });
        }}
      >
        Delete
      </a>
    </div>
  );
};

export default memo(Item);
