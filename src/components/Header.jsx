import { useRef, use } from "react";

import CartModal from "./CartModal.jsx";
import { CartContext } from "../store/shopping-cart-context.jsx";

export default function Header({ cart, onUpdateCartItemQuantity }) {
  const modal = useRef();
  const { items } = use(CartContext);

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  const baseButton = "rounded-md border-none cursor-pointer";

  const closeButton = `${baseButton} bg-transparent text-[#201e1a] text-[1.1rem] hover:text-[#453719]`;
  const checkoutButton = `${baseButton} bg-[#271e07] text-[#f9efda] text-base px-4 py-2 hover:bg-[#382e1b]`;

  let modalActions = <button className={closeButton}>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button className={closeButton}>Close</button>
        <button className={checkoutButton}>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header className="flex justify-between items-center py-12 px-[15%]">
        <div className="flex items-center">
          <img className="w-20 mr-6" src="logo.png" alt="Elegant model" />
          <h1 className="text-center uppercase text-[#edbf68] text-[2.5rem] m-0 [text-shadow:0_0_4px_rgba(35,34,34,0.4)]">
            Elegant Context
          </h1>
        </div>
        <p>
          <button
            className="bg-[#edbf68] border-none rounded-md py-2 px-6 text-[#201e1a] text-xl cursor-pointer hover:bg-[#f5b744]"
            onClick={handleOpenCartClick}
          >
            Cart ({cartQuantity})
          </button>
        </p>
      </header>
    </>
  );
}
