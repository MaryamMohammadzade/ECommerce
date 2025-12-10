import { Link } from "react-router-dom";
import useStore from "../../store";

const ProductCard = ({ id, title, price, image, onEdit }) => {
   const access_token = useStore((state) => state.access_token);
   const addToCart = useStore((state) => state.addToCart);
   const decreaseFromCart = useStore((state) => state.decreaseFromCart);

   const handleAdd = () => {
    if (!access_token) return; 
    addToCart({ id, title, price });
   };

   const handleDecrease = () => {
    if (!access_token) return; 
    decreaseFromCart(id);
   };

    
  return (
    <div className="rounded-xl shadow-lg flex flex-col items-center justify-start pb-4
                    min-w-80 w-full lg:w-1/5 bg-white
                    hover:shadow-2xl transition-shadow duration-300">

      <Link to={`/products/${id}`} className="w-full h-60 overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
          onError={(e) => { e.target.src = "/fallback.png"; }}
        />
      </Link>

      <div className="flex flex-col items-center justify-center gap-2 px-4 mt-2 w-full">
        <p className="text-center min-h-[73px] font-medium text-gray-800 ">{title}</p>

        <div className="flex items-center justify-between w-full mt-1">

          <p className="font-semibold text-orange-500">{price}$</p>

          <div className="flex gap-2">
            <button
                onClick={handleAdd}
                disabled={!access_token}
                className={`px-3 py-1 rounded text-sm transition-colors duration-200
                  ${access_token 
                    ? "bg-orange-500 text-white hover:bg-orange-600" 
                    : "bg-gray-300 text-gray-500 "}`}
              >
                +
              </button>

              <button
                onClick={handleDecrease}
                disabled={!access_token}
                className={`px-3 py-1 rounded text-sm transition-colors duration-200
                  ${access_token 
                    ? "bg-orange-500 text-white hover:bg-orange-600" 
                    : "bg-gray-300 text-gray-500 "}`}
              >
                -
              </button>


            <button
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors duration-200 text-sm"
              onClick={() => onEdit && onEdit({ id, title, price, image })}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
