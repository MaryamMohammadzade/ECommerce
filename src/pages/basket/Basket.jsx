import Cart from "../../components/cart/cart"
import useStore from "../../store";

function Basket() {
  const access_token = useStore((state) => state.access_token);

  if (!access_token) {
    return (
      <p className="p-4 text-red-500 font-semibold text-center">
        You must log in to view your basket.
      </p>
    );
  }

  return (
    <div className="flex justify-between">
      <Cart />
    </div>
  );
}

export default Basket;
