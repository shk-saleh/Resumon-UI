import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { X } from "lucide-react";

const Logout = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  if (!isOpen) return null;

  return (
    <div className="modal modal-bottom sm:modal-middle modal-open">
      <div className="modal-box relative">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={onClose}
        >
          <X className="h-5 w-5"/>
        </button>

        <h3 className="font-bold text-lg">Confirm Logout</h3>
        <p className="py-4">Are you sure you want to logout?</p>

        <div className="modal-action justify-between">
          <button className="btn btn-outline" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn btn-error"
            onClick={() => { logout(); onClose();  navigate("/get-started"); }}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Logout;