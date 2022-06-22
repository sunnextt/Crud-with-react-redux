import styled from 'styled-components';

const LoginWrp = styled.div`
    background-color: #fff;
    width: 35%;
    margin: 30px auto;
    text-align: center;
    padding: 20px 0;
    border-radius: 4px;
    box-shadow: 0px 30px 50px 0px rgba(0, 0, 0, 0.2);

    @media (max-width: 900px) {
        width: 80%;
    }

    input {
        display: block;
        box-sizing: border-box;
        width: 100%;
        outline: none;
        height: 60px;
        line-height: 60px;
        border-radius: 4px;
    }

    input[type='password'],
    input[type='email'] {
        width: 100%;
        padding: 0 0 0 10px;
        margin: 0;
        color: #8a8b8e;
        border: 1px solid #c2c0ca;
        font-style: normal;
        font-size: 16px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        position: relative;
        display: inline-block;
        background: none;
    }
    input[type='password']:focus,
    input[type='email']:focus {
        border-color: #3ca9e2;
    }
    input[type='password']:focus:invalid,
    input[type='email']:focus:invalid {
        color: #cc1e2b;
        border-color: #cc1e2b;
    }
    input[type='password']:valid ~ .validation,
    input[type='email']:valid ~ .validation {
        display: block;
        border-color: #0c0;
    }
    input[type='password']:valid ~ .validation span,
    input[type='email']:valid ~ .validation span {
        background: #0c0;
        position: absolute;
        border-radius: 6px;
    }
    input[type='password']:valid ~ .validation span:first-child,
    input[type='email']:valid ~ .validation span:first-child {
        top: 30px;
        left: 14px;
        width: 20px;
        height: 3px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    input[type='text']:valid ~ .validation span:last-child,
    input[type='email']:valid ~ .validation span:last-child {
        top: 35px;
        left: 8px;
        width: 11px;
        height: 3px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .validation {
        display: none;
        position: absolute;
        content: ' ';
        height: 60px;
        width: 30px;
        right: 15px;
        top: 0px;
    }

    input[type='submit'] {
        border: none;
        display: block;
        background-color: #3ca9e2;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
        font-size: 18px;
        position: relative;
        display: inline-block;
        cursor: pointer;
        text-align: center;
    }
    input[type='submit']:hover {
        background-color: #329dd5;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }
`;

export default LoginWrp;
