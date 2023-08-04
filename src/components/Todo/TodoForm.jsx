import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/features/todo/todoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(e.target.todo.value));
    e.target.todo.value = "";
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
