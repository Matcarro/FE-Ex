import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    username: string;
    email: string;
}

const initialState: UserState = {
    username: '',
    email: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserRedux(state, action: PayloadAction<{ username: string; email: string }>) {
            state.username = action.payload.username;
            state.email = action.payload.email;
        },
    },
});

export const { setUserRedux } = userSlice.actions;
export default userSlice.reducer;
