import { useDispatch } from "react-redux";
import { filterByStatus } from "../../redux/features/filter/filterSlice";

const TodoFooter = ({ status, count }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center p-4 sticky bottom-0 left-0 w-full ">
      <div className="text-teal-900">
        {count === 0 ? "No Todo Here" : count + " Todo Here"}
      </div>
      <div className="text-sm">
        <span
          className={`uppercase m-1 cursor-pointer ${
            status === "all" && "font-bold text-teal-700"
          }`}
          onClick={() => dispatch(filterByStatus("all"))}
        >
          all
        </span>
        <span
          className={`uppercase m-1 cursor-pointer ${
            status === "complete" && "font-bold text-teal-700"
          }`}
          onClick={() => dispatch(filterByStatus("complete"))}
        >
          complete
        </span>
        <span
          className={`uppercase m-1 cursor-pointer ${
            status === "incomplete" && "font-bold text-teal-700"
          }`}
          onClick={() => dispatch(filterByStatus("incomplete"))}
        >
          incomplete
        </span>
      </div>
    </div>
  );
};

export default TodoFooter;
