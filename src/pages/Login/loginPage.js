import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/Slice';
import { useNavigate } from 'react-router-dom';
import LoginWrp from './styled';

const initialState = {
    email: '',
    password: ''
};

const LoginPage = () => {
    const { user: currentUser } = useSelector((state) => state.auth);
    let navigate = useNavigate();
    const [user, setUser] = useState(initialState);
    const [, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        let { name, value } = e.target;
        let input = {
            ...user,
            [name]: value
        };
        setUser(input);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = user;
        setLoading(true);
        dispatch(login({ email, password }))
            .unwrap()
            .then(() => {
                navigate('/', { replace: true });
                window.location.reload(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    console.log(currentUser);

    useEffect(() => {
        if (currentUser) {
            navigate('/', { replace: true });
        }
    }, [currentUser, navigate]);

    return (
        <LoginWrp id="login-form-wrap">
            <h2>Login</h2>
            <form id="login-form" onSubmit={handleSubmit}>
                <p>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        required
                    />
                </p>
                <p>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        onChange={handleChange}
                        required
                    />
                </p>
                <p>
                    <input type="submit" id="login" value="Login" />
                </p>
            </form>
        </LoginWrp>
    );
};

export default LoginPage;
