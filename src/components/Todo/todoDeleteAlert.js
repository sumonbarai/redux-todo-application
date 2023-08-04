import Swal from "sweetalert2";
import store from "../../redux/app/store";
import { removeTodo } from "../../redux/features/todo/todoSlice";

const todoDeleteAlert = (id) => {
  Swal.fire({
    title: "Are you sure?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#14B8A6",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      store.dispatch(removeTodo(id));
      Swal.fire(
        {
          title: "Your file has been deleted!",
          icon: "success",
          confirmButtonColor: "#14B8A6",
          confirmButtonText: "ok",
        }

        // "Deleted!", "Your file has been deleted.", "success"
      );
    }
  });
};

export default todoDeleteAlert;
