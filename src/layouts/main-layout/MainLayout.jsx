import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

export default function MainLayout() {
  return (
    
    <div className="flex flex-col ">

      <Header />

      <div className="flex bg-slate-100 p-5">
   

      
          <Outlet />
     

      </div>

    </div>

  );
}
