import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        error: null,
        success: null,
        fieldError: null
    },
    reducers: {
        registerUser: (state, action) => {
            const { username, password, confirmPassword } = action.payload;

            if (!username || !password || !confirmPassword) {
                state.fieldError = 'Все поля должны быть заполнены';
                state.error = null;
                state.success = null;
                return;
            }

            if (password !== confirmPassword) {
                state.fieldError = null;
                state.error = 'Пароли не совпадают';
                state.success = null;
                return;
            }

            if (state.users.find(user => user.username === username)) {
                state.error = 'Такой пользователь уже существует';
                state.success = null;
                state.fieldError = null;
                return;
            }

            state.users.push({ username, password });
            state.error = null;
            state.success = 'Вы успешно зарегистрированы';
            state.fieldError = null;
        },
    },
});

export const { registerUser } = userSlice.actions;
export const selectError = (state) => state.user.error;
export const selectSuccess = (state) => state.user.success;
export const selectFieldError = (state) => state.user.fieldError;
export default userSlice.reducer;
