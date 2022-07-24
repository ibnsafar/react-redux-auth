import {createSlice} from "@reduxjs/toolkit";

const UserReducer = createSlice({
    name: "userName",
    initialState: {
        infoInit: null
    },
    reducers: {
        getUserInfo: ((state, action) => {
            state.infoInit = action.payload
        })
    }
})

export default UserReducer.reducer;