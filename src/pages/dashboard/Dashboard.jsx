import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import DashboardSkeleton from "../../components/skeletons/dashboard-skeleton";
import ErrorOnFetchApi from "../../components/error-on-fetch-api";
import { removeCookie } from "../../utils/helpers/cookie";
import useStore from "../../store";
import { Link } from "react-router-dom";
import getUserInfoWithTokenApi from "../../utils/apis/users/getUserInfoWithTokenApi";

import { useQuery } from "@tanstack/react-query";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";


const Dashboard = () => {
  const { access_token, removeState } = useStore();
  const navigate = useNavigate();

  const { isPending, error, data } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => getUserInfoWithTokenApi(),
    enabled: access_token != null && access_token != undefined,
  });

  console.log(data);

  const handleLogout = () => {
    removeCookie("credential");
    removeState();

    toast.warn("logged out successfully , redirecting to login page...");
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <div>
      {access_token != null && access_token != undefined ? (
        <>
          {isPending && <DashboardSkeleton />}
          {error && <ErrorOnFetchApi />}
          {data && (
            <div>
              <ListItem alignItems="center">
                <div className="w-40 pe-4 rounded-full">
                  <img
                    alt="profile image"
                    className="rounded-full"
                    src={data?.data?.avatar}
                  />
                </div>
                <ListItemText
                  primary={
                    <p className="font-bold">{`Welcome, ${data?.data?.name}!`}</p>
                  }
                  secondary={
                    <div className="flex flex-col gap-4 mt-4">
                      <div>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: "text.primary", display: "inline" }}>
                          name: &nbsp;
                        </Typography>
                        {data?.data?.name}
                      </div>{" "}
                      <div>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: "text.primary", display: "inline" }}>
                          role: &nbsp;
                        </Typography>
                        {data?.data?.role}
                      </div>{" "}
                      <div>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: "text.primary", display: "inline" }}>
                          password: &nbsp;
                        </Typography>
                        {data?.data?.password}
                      </div>{" "}
                    </div>
                  }
                />
              </ListItem>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-slate-50 rounded-md px-4 py-2 ms-4 flex items-center gap-2">
                <span>Logout</span>
                <LogoutIcon />
              </button>
            </div>
          )}
        </>
      ) : (
        <Link
          className="underline flex items-center justify-center "
          to="/login">
          <p className="bg-slate-500 px-4 py-2 capitalize text-slate-50 rounded-md my-16 text-xl">
            {" "}
            only logged in users can access to dashboard
          </p>
        </Link>
      )}
    </div>
  );
};

export default Dashboard;
