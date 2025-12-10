import Skeleton from '@mui/material/Skeleton';

const ProductsGridSkeleton = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {[1,2,3,4,5].map((item) => (
        <div 
          key={item} 
          className="flex flex-col shadow-lg rounded-xl bg-white w-64 p-4 gap-3"
        >
          <Skeleton 
            variant="rectangular" 
            className="rounded-xl" 
            width="100%" 
            height={160} 
          />
          
          <Skeleton 
            variant="text" 
            width="80%" 
            height={24} 
          />
          
          <Skeleton 
            variant="text" 
            width="100%" 
            height={16} 
          />
          <Skeleton 
            variant="text" 
            width="90%" 
            height={16} 
          />
        </div>
      ))}
    </div>
  )
}

export default ProductsGridSkeleton;
