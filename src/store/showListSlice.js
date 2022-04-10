import { ALL } from "../standards";
export const initialShowList = ALL;

export const showListReducer = (
  state = { status: initialShowList },
  action
) => {
  if (action.type === "change-show-list") {
    return { status: action.payload.showList };
  }
  return state;
};

export const selectName = (state) => {
  return state.showList;
};

export const changeShowList = (showList) => {
  return {
    type: "change-show-list",
    payload: showList,
  };
};
