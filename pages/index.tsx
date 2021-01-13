import React, { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import fire from "firebase";

function Index(props: any): JSX.Element {
  return (
    <div>
      <TodoList items={props.items} currentItem={props.currentItem}></TodoList>
    </div>
  );
}

export default Index;
