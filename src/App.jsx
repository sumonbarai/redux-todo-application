import "./App.css";
import bg from "./assets/bg.jpg";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";

function App() {
  const bgStyle = {
    backgroundImage: `linear-gradient(#000000b9, #000000b9),
      url(${bg})`,
  };

  return (
    <div
      className="w-full h-screen bg-no-repeat bg-center bg-cover"
      style={bgStyle}
    >
      <div className="container mx-auto p-6 ">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
