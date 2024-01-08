import { useAppSelector, useAppDispatch } from "../store/actions"; // useSelector to subscribe to specific/whole part of store
import { clearCart } from "../store/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useAppSelector((store) => store.cart.items); // cartItems is subscribed to 'items' in Cart-Slice

  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center w-6/12 mx-auto">
      <h1 className="font-bold my-6 text-2xl">
        Cart ({cartItems.length} items)
      </h1>
      <button
        onClick={handleClearCart}
        className="text-lg px-4 py-2 bg-gray-300 rounded-lg"
      >
        Clear your Cart
      </button>
      <ItemList items={cartItems} input={"Remove"} />
    </div>
  );
};

export default Cart;
