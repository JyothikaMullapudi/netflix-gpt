import { createSlice } from "@reduxjs/toolkit";

const configslice = createSlice({
    name : "config",
    initialState :
    {
        inlang : "en"
    } ,
    reducers : {
        changeLang : (state, action)=>{
            state.inlang=action.payload;
        }
    }
});

export const {changeLang} = configslice.actions;
export default configslice.reducer;
