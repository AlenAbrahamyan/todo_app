import { ALL, COMPLETED, UNCOMPLETED } from "../standards";

export const getFilteredTodos = (state) => {
  const { showList, todos } = state;
  if (showList.status === ALL) {
    return todos;
  } else if (showList.status === COMPLETED) {
    return todos.filter((todo) => todo.compleated);
  } else if (showList.status === UNCOMPLETED) {
    return todos.filter((todo) => !todo.compleated);
  }
};
