// src/lib/toast.js
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function showResumeToast() {
  toast.info("Resume will be added later. Please check back soon.", {
    closeButton: true,
    hideProgressBar: false,
  });
}
