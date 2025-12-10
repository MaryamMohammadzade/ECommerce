import PriceRangeFilter from "../price-range-filter/PriceRangeFilter";
import SearchBox from "../Search";
import CreateProductButton from "../create-product-button/CreateProductButton";
import Cart from "../cart/cart";

export default function Sidebar() {
 
  return (
    <aside className="min-w-1/5 p-8 border-r border-gray-200 px-[30px] min-h-screen bg-[#fafafa] sticky top-0 flex flex-col gap-10">   
      
      <CreateProductButton />
      <SearchBox />
      <PriceRangeFilter />
      <Cart />
     
      </aside>
  );
}
