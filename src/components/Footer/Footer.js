import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import Cotroler from "./Controler";

const getCompleted = (state) =>
  state.todos.filter((todo) => todo.compleated).length;

const countCompleatedTodos = createSelector(getCompleted, (count) => count);

const CompletedCount = () => {
  const compleatedTodos = useSelector(countCompleatedTodos);

  return <p>compleated:{compleatedTodos}</p>;
};

const Footer = () => {
  return (
    <>
      <CompletedCount />
      <Cotroler />
    </>
  );
};

export default Footer;
