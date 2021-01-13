import TodoList from "../components/TodoList";


function Index(props: any): JSX.Element {
  return (
    <div>
      <TodoList items={props.items} currentItem={props.currentItem}></TodoList>
    </div>
  );
}

export default Index;
