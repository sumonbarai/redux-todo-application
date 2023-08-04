import Swal from "sweetalert2";

const todoExitsAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    confirmButtonColor: "#14B8A6",
    text: "Task already exist",
  });
};
export default todoExitsAlert;
