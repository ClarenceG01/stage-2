import { toast } from "react-toastify";
function errorToast(message) {
  return toast.error(message, {
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
export default errorToast;
