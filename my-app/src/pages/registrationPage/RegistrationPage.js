import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, selectError, selectSuccess, selectFieldError } from '../../store/userSlice';
import './style.css';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const error = useSelector(selectError);
    const success = useSelector(selectSuccess);
    const fieldError = useSelector(selectFieldError);

    const handleRegister = () => {
        dispatch(registerUser({ username, password, confirmPassword }));
        clearInputs();
    };

    const clearInputs = () => {
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div>
            <h1>Регистрация</h1>
            <div className='input_block'>
                <input
                    type="text"
                    placeholder="Имя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Подтвердите пароль"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            {fieldError && <p style={{ color: "red" }}>{fieldError}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
            <button onClick={handleRegister}>Зарегистрироваться</button>
        </div>
    );
};

export default RegisterPage;
