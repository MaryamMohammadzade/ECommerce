import { useParams } from "react-router-dom"
import getChategoryByIdApi from "../../utils/apis/products/getCategoryByIdApi"
import { useQuery } from "@tanstack/react-query";
import CategoryInfoSkeleton from "../../components/skeletons/category-info-skeleton/CategoryInfoSkeleton";
import ErrorOnFetchApi from '../../components/error-on-fetch-api';
import ProductsByCategoryGrid from "../../components/products-by-category-grid"


const Category = () => {
    const {id} = useParams() || "";
    const {isPending, error, data} = useQuery({
        queryKey:["CategoriesInfo", id],
        queryFn: () => getChategoryByIdApi(id)
    });

  return (
    <div className="px-4 flex flex-col items-center justify-center gap-4">
       {isPending && <CategoryInfoSkeleton />}
       {error && <ErrorOnFetchApi />}
       {data &&
         <>
           <img
              className="w-32 h-32 rounded-full"
               src={data?.data?.image}
               alt="category"
               onError={(e) => {
               e.target.src = "/fallback.png";
               }}
            />
            <p className="font-bold">{data?.data?.name}</p>
          </>
        }
         {data && <ProductsByCategoryGrid id={id} />}
      </div>
     
  )
}

export default Category