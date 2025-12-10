import Chip from '@mui/material/Chip';

const CategoryItemsSkeleton = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <Chip
          key={index}
          avatar={
            <div className="w-8 h-8 rounded-full bg-slate-300 animate-pulse" />
          }
          label={
            <div className="w-20 h-4 bg-slate-300 rounded-2xl animate-pulse" />
          }
          variant="outlined"
          className="pointer-events-none"
        />
      ))}
    </div>
  );
};

export default CategoryItemsSkeleton;
