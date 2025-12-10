import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import getAllProductsApi from "../../utils/apis/products/getAllProductsApi";
import ErrorOnFetchApi from "../../components/error-on-fetch-api";

import ProductGridSkeleton from "../../components/skeletons/products-grid-skeleton";
import CategoriesItems from "../../components/chategories-items/CategoriesItems";
import ProductCard from "../../components/product-card";
import UpdateProductModal from "../../components/modals/update-product-modal"
import UpdateProductForm from "../../components/forms/update-product-form/UpdateProductForm";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Products() {
  const [searchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const title = searchParams.get("title") || "";
  const price_min = searchParams.get("price_min") || "";
  const price_max = searchParams.get("price_max") || "";

  const { isPending, error, data } = useQuery({
    queryKey: ["products", title, price_min, price_max],
    queryFn: () =>
      getAllProductsApi({
        title,
        price_min,
        price_max,
      }),
  });

  return (
    <div className="flex gap-4">
      <Sidebar />

      <div className="px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-center">All Products</h2>
      
        <div className="mb-6 flex flex-wrap justify-center">
          <CategoriesItems />
        </div>

        <div className="flex flex-wrap gap-5 justify-center">
          {isPending &&
            [1, 2, 3, 4, 5].map((i) => <ProductGridSkeleton key={i} />)}

          {error && <ErrorOnFetchApi />}

          {data?.data?.length === 0 && (
            <p className="text-center text-gray-500">No products found.</p>
          )}

         {data?.data?.map((product) => (
          
             <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 ">
               <ProductCard
                 id={product.id}
                 title={product.title}
                 price={product.price}
                 image={product.images[0]}
                 onEdit={(prod) => setSelectedProduct(prod)}
               />
             </div>
              ))}
              {selectedProduct && (
                <UpdateProductModal onClose={() => setSelectedProduct(null)}>
                 <UpdateProductForm
                  product={selectedProduct}
                 />
               </UpdateProductModal>
              )}
        
      </div>
    </div>
    </div>
  );
}
