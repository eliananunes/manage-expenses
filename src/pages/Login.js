import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getName, getEmail } from "../redux/userSlice";
import validator from 'validator';
import { useNavigate } from 'react-router';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin= () => {
        dispatch(getName(name));
        dispatch(getEmail(email));
        navigate('/despesas');
    };

    return(
        <div>
            <h1>Login:</h1>
            <input
                type="text"
                name="name"
                placeholder="Nome"
                value={ name }
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={ email }
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                name="password"
                placeholder="Senha"
            />
            <button
                type="button"
                disabled={ !(validator.isEmail(email)) }
                onClick={handleLogin}
            >
                Entrar
            </button>
        </div>
    );
}

export default Login;