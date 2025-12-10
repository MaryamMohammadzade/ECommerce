import Skeleton from '@mui/material/Skeleton';
function CategoryInfoSkeleton() {
  return (
  <div className="h-screen flex flex-col  items-center gap-4">
  <Skeleton variant="circular" width={60} height={60} />
  <Skeleton variant="rectangular" width={210} height={30} />
  <Skeleton variant="rounded" width={210} height={60} />
</div>

  )
}

export default CategoryInfoSkeleton