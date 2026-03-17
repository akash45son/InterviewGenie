import axios from 'axios';

// Create an axios instance with the base URL to avoid repeating the base URL and withCredentials in every request 
const api = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
});

// register function to send user data to the backend from frontend
export async function register({ username, email, password }){
    try {
        const response = await api.post('/api/auth/register', {
            username,
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.log('Registration error:', error);
    }
}

// login function to send user data to the backend from frontend
export async function login({ email, password }){
    try {
        const response = await api.post('/api/auth/login', {
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.log('Login error:', error);
    }
}

// logout function to clear the authenticated session cookie
export async function logout(){
    try {
        const response = await api.get('/api/auth/logout');
        return response.data;
    } catch (error) {
        console.log('Logout error:', error);
    }
}


export async function getMe(){
    try {
        const response = await api.get('/api/auth/get-me');
        return response.data;
    } catch (error) {
        console.log('Error fetching user data:', error);
    }
}