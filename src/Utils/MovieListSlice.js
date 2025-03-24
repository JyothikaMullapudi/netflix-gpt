import { createSlice } from "@reduxjs/toolkit";


const MovieListSlice = createSlice(
    {
        name: "Movie",
        initialState: {
            NewMovieListSlice: null,
            trailerId :null
        },
        reducers: {

            addMovieListSlice: (state, action) => {
                state.NewMovieListSlice = action.payload;
            },
            addTrailerId : (state , action)=>{
             state.trailerId = action.payload;

            }

        }
    }
);

export const {addMovieListSlice,addTrailerId}=MovieListSlice.actions;

export default MovieListSlice.reducer;