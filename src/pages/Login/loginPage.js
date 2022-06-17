import React from 'react';

const LoginPage = () => {
    return (
        <div id="login-form-wrap">
            <h2>Login</h2>
            <form id="login-form">
                <p>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        required
                    />
                </p>
                <p>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        required
                    />
                </p>
                <p>
                    <input type="submit" id="login" value="Login" />
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
