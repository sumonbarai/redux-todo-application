const TodoFooter = () => {
  return (
    <div className="flex justify-between items-center p-4 absolute bottom-0 left-0 w-full">
      <div>No Todo here</div>
      <div className="text-sm">
        <span className="uppercase m-1 cursor-pointer font-bold text-teal-700">
          all
        </span>
        <span className="uppercase m-1 cursor-pointer ">complete</span>
        <span className="uppercase m-1 cursor-pointer ">incomplete</span>
      </div>
    </div>
  );
};

export default TodoFooter;
