import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const useAuth = () => {
    const allContext = useContext(AuthContext);
    return allContext;
};

export default useAuth;