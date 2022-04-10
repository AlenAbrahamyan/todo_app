import { useSelector } from "react-redux";
import RenderItems from "./RenderItems";
import { getFilteredTodos } from "../sectors/getFilteredTodos";

const ShowItems = () => {
  const todos = useSelector(getFilteredTodos);
  return (
    <div className="ItemsList">
      <RenderItems todosList={todos} />
    </div>
  );
};

export default ShowItems;
