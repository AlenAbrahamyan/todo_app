import Item from "./Item";

const RenderList = ({ todosList }) => {
  return todosList.map((todo) => {
    return (
      <>
        <Item key={todo.id} todo={todo} />
      </>
    );
  });
};

export default RenderList;
