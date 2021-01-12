import React from 'react';
import TodoList from '../components/TodoList';


function Index(props: any):JSX.Element{
  return(
    <TodoList  items={props.items} currentItem={props.currentItem}></TodoList>
  )
}

export default  Index;