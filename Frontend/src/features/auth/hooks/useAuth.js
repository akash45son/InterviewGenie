import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import { login,register,logout} from "../services/auth.api.js";
import { useEffect } from "react";
import { getMe } from "../services/auth.api.js";

export const useAuth = () => {
    const context = useContext(AuthContext);
    const { user, setUser, loading, setLoading } = context;

    // Function to handle user login and show loading state while the login request is being processed
    const handleLogin = async ({ email, password }) => {
        try{setLoading(true);
            const data = await login({ email, password });
            setUser(data.user);
        
        } catch (error) {
            
        }
        finally {
            setLoading(false);
        }
    };

    // Function to handle user registration and show loading state while the registration request is being processed
    const handleRegister = async ({ email, password, name }) => {
        try{
            setLoading(true);
            const data = await register({ email, password, name });
            setUser(data.user);
        } catch (error) {
            
        }
        finally{
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try{setLoading(true);
        const data = await logout();
        setUser(null);
        } catch (error) {

        }finally {
        setLoading(false);
        }
    };

 useEffect(() => {
        const getAndSetUser = async () => {
            try {
                const userData = await getMe();
                setUser(userData);
            } catch (error) {
                setUser(null);
                } finally 
                {
                    setLoading(false);
                }
        };
        getAndSetUser();
    }, []);

    return { user, loading, handleLogin, handleRegister, handleLogout };
}