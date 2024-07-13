import { toast } from "react-toastify";
function successToast(message) {
  return toast.success(message, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}
export default successToast;
