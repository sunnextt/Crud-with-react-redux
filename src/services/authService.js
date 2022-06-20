import axios from 'axios';
const API_URL = 'https://stage.api.sloovi.com/';

const login = async (email, password) => {
    const response = await axios.post(API_URL + 'login', {
        email,
        password
    });
    console.log(response.data);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem('user');
    window.location.reload();
};
const authService = {
    login,
    logout
};
export default authService;
