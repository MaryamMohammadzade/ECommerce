import { useQuery } from "@tanstack/react-query";
import getProductsByCategoryApi from "../../utils/apis/products/getProductsByCategoryApi";
import ProductGridSkeleton from "../skeletons/products-grid-skeleton";
import ErrorOnFetchApi from "../error-on-fetch-api";
import ProductCard from "../product-card"; 
import Category from "../../pages/category";

const ProductsByCategoryGrid = ({ id }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["productsByCategory", id],
    queryFn: () => getProductsByCategoryApi(id),
  });
console.log("CATEGORY DATA:", data);
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {isPending &&
         [1,2,3,4,5,6].map((i) => <ProductGridSkeleton key={i} />)}
      {error && <ErrorOnFetchApi />}

       {data?.data?.length === 0 && (
        <p className="text-center text-gray-500">No products found.</p>
        )}
        
      {data &&
        data?.data?.map((product) => (
          <ProductCard
            key={product?.id}
            id={product?.id}
            title={product?.title}
            price={product?.price}
            image={product?.images[0].replace(/^["[\]]+|["[\]]/g, "")}
            
          />
        ))}
    </div>
  );
};

export default ProductsByCategoryGrid;
