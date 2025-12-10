import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getProductByIdApi from "../../utils/apis/products/getProductByIdApi";
import CategoryInfoSkeleton from "../../components/skeletons/category-info-skeleton/CategoryInfoSkeleton";
import ErrorOnFetchApi from '../../components/error-on-fetch-api';

const SingleProduct = () => {
  const { id } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["SingleProductInfo", id],
    queryFn: () => getProductByIdApi(id),
  });

  if (isPending) return <CategoryInfoSkeleton />;
  if (error) return <ErrorOnFetchApi />;

  const product = data?.data; 

  return (
    <div className="px-4 flex flex-col items-center justify-center gap-4">
      <img
        className="w-32 h-32 rounded-full"
        src={product?.images[0].replace(/^["[\]]+|["[\]]/g, "") || "/fallback.png"}
        alt={product?.name || "product"}
        onError={(e) => {
               e.target.src = "/fallback.png";
               }}
      />
      <p className=" font-black">Product Title:<span className=" font-medium"> {product?.title}</span></p>
      <p className=" font-black">Product Category: <span className=" font-medium">{product?.category.name}</span></p>
      <p className="font-bold">Product Description:<span className=" font-medium"> {product?.description}</span></p>
    </div>
  );
};

export default SingleProduct;
