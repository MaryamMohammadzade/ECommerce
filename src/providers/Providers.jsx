import { useEffect } from "react";
import { getCookie } from "../utils/helpers/cookie";
import  useStore  from "../store"
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
    
    const queryClient = new QueryClient();
    const Authorize = ({ children }) => {
    const {setState} = useStore();

  useEffect(() => {
    const readCookie = async () => {
      const res = await getCookie("credential");
      setState(res);
      
      console.log(res);
    };

    readCookie();
  }, []);



  return children;
};

export default function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Authorize>
        {children}       
        <ToastContainer />
      </Authorize> 
    </QueryClientProvider>
  )
}
