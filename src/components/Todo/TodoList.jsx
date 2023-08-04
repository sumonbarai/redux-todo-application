import { useSelector } from "react-redux";
import TodoFooter from "./TodoFooter";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
  const { status } = useSelector((state) => state.filter);

  // const filterByStatus = (todo) => {
  //   switch (status) {
  //     case "complete":
  //       return todo.completed;
  //     case "incomplete":
  //       return !todo.completed;
  //     default:
  //       return true;
  //   }
  // };

  const filterTodos = todos.filter((todo) => {
    switch (status) {
      case "complete":
        return todo.completed;
      case "incomplete":
        return !todo.completed;
      default:
        return true;
    }
  });

  let content;
  if (filterTodos.length < 1) {
    content = <div className="text-lg">No Todo Here</div>;
  }

  if (filterTodos.length >= 1) {
    content = filterTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
  }

  return (
    <div className="bg-[rgba(224,242,254,0.70)]  p-8  rounded-lg w-11/12 mx-auto my-4  ">
      <h2 className="text-center text-2xl capitalize">{status} Todo list</h2>
      <div className="h-[350px] overflow-auto relative bg-scroll">
        <div className="flex flex-col gap-1">{content}</div>
      </div>
      <TodoFooter status={status} count={filterTodos.length} />
    </div>
  );
};

export default TodoList;
