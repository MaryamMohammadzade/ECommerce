import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { useQuery } from '@tanstack/react-query';
import getChategoriesApi from "../../utils/apis/products/getChategoriesApi";
import CategoryItemsSkeleton from '../skeletons/category-item-skeleton';
import ErrorOnFetchApi from '../error-on-fetch-api';
import { Link } from "react-router-dom";

const CategoriesItems = () => {

  const { isPending, error, data } = useQuery({
    queryKey:["CategoriesInfo"],
    queryFn: getChategoriesApi
  });

  // Normalize data for safe usage
  const categories = data?.data ?? data ?? [];

  return (
    <div className='flex flex-wrap gap-4'>
      {isPending && <CategoryItemsSkeleton />}
      {error && <ErrorOnFetchApi />}

      {categories.map((category) => (
        <Link to={`/category/${category.id}`} key={category.id}>
          <Chip
            avatar={<Avatar alt="category image" src={category.image || "/fallback.png"} />}
            label={category.name}
            variant="outlined"
          />
        </Link>
      ))}
    </div>
  );
};

export default CategoriesItems;
