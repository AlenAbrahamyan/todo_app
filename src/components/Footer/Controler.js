import { useDispatch } from "react-redux";
import {ALL, COMPLETED, UNCOMPLETED} from '../../standards'

const Controler = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "change-show-list",
            payload: {
              showList: ALL,
            },
          });
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "change-show-list",
            payload: {
              showList: COMPLETED,
            },
          });
        }}
      >
        Completed
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "change-show-list",
            payload: {
              showList: UNCOMPLETED,
            },
          });
        }}
      >
        Uncompleted
      </button>
    </div>
  );
};

export default Controler;
