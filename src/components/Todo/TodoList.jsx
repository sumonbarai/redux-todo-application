import { useSelector } from "react-redux";
import TodoFooter from "./TodoFooter";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  let content;
  if (todos.length < 1) {
    content = <div>No Todo Here</div>;
  }

  if (todos.length >= 1) {
    content = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
  }

  return (
    <div className="bg-[rgba(224,242,254,0.70)]  p-8  rounded-lg w-11/12 mx-auto my-4 h-[600px] overflow-auto relative">
      <h2 className="text-center text-2xl capitalize">All Todo list</h2>
      <div className="flex flex-col gap-1">{content}</div>
      <TodoFooter />
    </div>
  );
};

export default TodoList;
