import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const DashboardSkeleton = () => {
  return (
    <ListItem alignItems="flex-start">
      <div className="lg:w-40 w-20 me-6 rounded-full animate-pulse bg-slate-400 h-20 lg:h-40"></div>
      <ListItemText
        primary={
          <div className="bg-slate-400 animate-pulse rounded-lg w-60 h-6"></div>
        }
        secondary={
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-4">
              <div className="bg-slate-400 animate-pulse rounded-lg w-20 h-4"></div>
              <div className="bg-slate-400 animate-pulse rounded-lg w-32 h-4"></div>
            </div>{" "}
            <div className="flex gap-4">
              <div className="bg-slate-400 animate-pulse rounded-lg w-20 h-4"></div>
              <div className="bg-slate-400 animate-pulse rounded-lg w-32 h-4"></div>
            </div>{" "}
            <div className="flex gap-4">
              <div className="bg-slate-400 animate-pulse rounded-lg w-20 h-4"></div>
              <div className="bg-slate-400 animate-pulse rounded-lg w-32 h-4"></div>
            </div>{" "}
          </div>
        }
      />
    </ListItem>
  );
};

export default DashboardSkeleton;
