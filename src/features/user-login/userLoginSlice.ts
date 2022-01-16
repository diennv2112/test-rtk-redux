import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    id?: number,
    userName?: string,
    email?: string,
    phone?: string,
};

const initialState = {
    id: 1,
    userName: 'admin',
    email: 'admin@gmail.com',
    phone: '0987586584',
};

export const userLoginSlice = createSlice({
    name: 'userLogin',
    initialState,
    reducers: {
        edit: (state, action: PayloadAction<User>) => {
            Object.assign(state, action.payload);
        }
    }
});

export const { edit } = userLoginSlice.actions;
export default userLoginSlice.reducer;
