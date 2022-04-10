const initialTodos = [
  {
    id: 623,
    text: "Text N1",
    compleated: false,
  },
  {
    id: 926,
    text: "Text N2",
    compleated: true,
  },
  {
    id: 983,
    text: "Text N3",
    compleated: false,
  },
];

export const todosReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case "add-new-todo": {
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 100000),
          text: action.payload,
          compleated: false,
        },
      ];
    }

    case "change-completed-status": {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            compleated: !todo.compleated,
          };
        }
        return todo;
      });
    }
    case "delete-item": {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
    default:
      return state;
  }
};

export const selectTodos = (state) => {
  return state;
};

export const addNewTodo = (newTodo) => {
  return {
    type: "add-new-todo",
    payload: newTodo,
  };
};
