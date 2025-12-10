import useStore from "../../store";

export default function Cart() {
  const cart = useStore((state) => state.cart);
  const getTotal = useStore((state) => state.getTotal);
  const access_token = useStore((state) => state.access_token);

  if (!access_token) {
    return (
      <>
        <h3 className="text-[1.1rem] p-0 m-0">Shopping Cart</h3>
        <p className=" text-red-500">Login to view your cart</p>
      </>
    )
    
  }

  return (
    <div >
      <h3 className="text-[1.2rem] font-semibold pb-4 my-4">Shopping Cart</h3>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.title} x {item.quantity}</span>
          <span>${item.price * item.quantity}</span>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="mt-4 font-bold">
          Total: ${getTotal()}
        </div>
      )}
    </div>
  );
}
