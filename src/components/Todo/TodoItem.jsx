import { MdOutlineDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../redux/features/todo/todoSlice";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  console.log(todo);
  const { id, text, completed } = todo;
  return (
    <div className="shadow p-4 m-2 flex gap-3 cursor-pointer hover:shadow-xl relative group/item">
      <div>
        <input
          type="checkbox"
          checked={completed}
          className="w-4 h-4 accent-teal-500 rounded-lg cursor-pointer"
          onChange={() => dispatch(changeStatus(id))}
        />
      </div>
      <div className="px-4">task -{id}</div>
      <div className="px-4 mx-4">{text}</div>
      <div className="flex gap-7 text-xl absolute  right-10 invisible group-hover/item:visible ">
        <div>
          <FiEdit />
        </div>
        <div>
          <MdOutlineDelete />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
