import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";

const CartModal = forwardRef(function Modal({ title, actions }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      id="modal"
      className="w-[30%] bg-[#d3b17b] border-none rounded-md shadow-[0_0_10px_rgba(0,0,0,0.5)] animate-[fade-slide-in-from-top_0.3s_ease-in-out] p-2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop:bg-[rgba(0,0,0,0.65)]"
      ref={dialog}
    >
      <h2 className="text-2xl text-[#4f3807] uppercase m-0">{title}</h2>
      <Cart />
      <form
        className="flex gap-4 justify-end items-center"
        method="dialog"
        id="modal-actions"
      >
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
