import { use } from "react";
import { CartContext } from "../store/shopping-cart-context";

export default function Product({ id, image, title, price, description }) {
  const { addItemToCart } = use(CartContext);

  return (
    <article className="h-full bg-[#5f4e33] rounded-md flex flex-col shadow-[0_0_10px_rgba(0,0,0,0.2)]">
      <img className="w-full rounded-md" src={image} alt={title} />
      <div className="flex flex-col flex-1 pt-0 pr-4 pb-2 pl-4 justify-between">
        <div>
          <h3 className="text-xl text-[#fbd392] mb-0.5">{title}</h3>
          <p className="text-base text-[#d1b68b] m-0">₹{price}</p>
          <p>{description}</p>
        </div>
        <p className="text-right">
          <button
            className="bg-[#f4b115] border-none rounded-md py-2 px-4 text-[#201e1a] text-base cursor-pointer hover:bg-[#f5b744]"
            onClick={() => addItemToCart(id)}
          >
            Add to Cart
          </button>
        </p>
      </div>
    </article>
  );
}
