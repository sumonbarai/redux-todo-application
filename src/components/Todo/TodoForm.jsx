import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/features/todo/todoSlice";
import todoExitsAlert from "./todoExist";

const TodoForm = () => {
  const { todos } = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target.todo.value;
    // checking todo is exist or not

    if (data) {
      const findTodo = todos.find((todo) => todo.text === data);
      if (!findTodo) {
        dispatch(addTodo(data));
        e.target.todo.value = "";
      } else {
        todoExitsAlert();
      }
    }
  };

  return (
    <div>
      <form className="flex w-2/4 mx-auto  gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          className="w-4/5 p-2 bg-zinc-100 rounded-lg outline-4 outline-offset-2 focus:outline-teal-400 caret-teal-500"
        />
        <button
          type="submit"
          className="bg-teal-500 p-2 rounded-lg capitalize cursor-pointer text-white active:scale-95 w-1/5"
        >
          add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
