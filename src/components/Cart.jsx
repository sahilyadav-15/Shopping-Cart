import { use } from "react";
import { CartContext } from "../store/shopping-cart-context";

export default function Cart() {
  const { items, updateItemQuantity } = use(CartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `₹${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul
          id="cart-items"
          className="list-none my-4 mx-0 p-0 flex flex-col gap-2"
        >
          {items.map((item) => {
            const formattedPrice = `₹${item.price.toFixed(2)}`;

            return (
              <li
                className="flex justify-between items-center py-2 px-4 bg-[#fbd392] rounded-md text-sm"
                key={item.id}
              >
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => updateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
