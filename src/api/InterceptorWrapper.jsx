import { useNavigate } from "react-router-dom";
import setupInterceptors from "./axiosInterceptors";

const InterceptorWrapper = ()=>{
    
const navigate = useNavigate();

  useEffect(() => {
    setupInterceptors(navigate);
  }, [navigate]);

  return children;
}

export default InterceptorWrapper;