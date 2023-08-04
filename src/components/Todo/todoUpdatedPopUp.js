import Swal from "sweetalert2";
import store from "../../redux/app/store";
import { updateTodo } from "../../redux/features/todo/todoSlice";

const todoUpdatePopUp = (id, text) => {
  Swal.fire({
    title: "Update your Todo Name",
    input: "text",
    inputValue: text,
    confirmButtonColor: "#14B8A6",
    cancelButtonColor: "#14B8A6",
    inputValidator: (value) => {
      if (value) {
        store.dispatch(updateTodo({ id, text: value }));
      }
    },
    showCancelButton: true,
    confirmButtonText: "Update",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Updated!", "Your Todo is Updated.", "success");
    }
  });
};

export default todoUpdatePopUp;
