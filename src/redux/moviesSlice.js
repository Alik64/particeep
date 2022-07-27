import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movies$ } from "../data/movies";

const initialState = {
  isLoading: false,
  error: "",
  data: null,
};

export const fetchMoviesThunk = createAsyncThunk(
  "movies/getMovies",
  async (_, thunkApi) => {
    try {
      let response = await movies$;
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue("Error");
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    likeMovie: (state, action) => {
      state.data.map((movie) =>
        movie.id === action.payload ? movie.likes++ : null
      );
      return state;
    },
    unlikeMovie: (state, action) => {
      state.data.map((movie) =>
        movie.id === action.payload ? movie.likes-- : null
      );
      return state;
    },
    dislikeMovie: (state, action) => {
      state.data.map((movie) =>
        movie.id === action.payload ? movie.dislikes++ : null
      );
      return state;
    },
    undislikeMovie: (state, action) => {
      state.data.map((movie) =>
        movie.id === action.payload ? movie.dislikes-- : null
      );
      return state;
    },
    deleteMovie: (state, action) => {
      state.data = state.data.filter((movie) => movie.id !== action.payload);
      return state;
    },
  },
  extraReducers: {
    [fetchMoviesThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchMoviesThunk.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = "";
    },
    [fetchMoviesThunk.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  likeMovie,
  unlikeMovie,
  dislikeMovie,
  undislikeMovie,
  deleteMovie,
} = moviesSlice.actions;

export default moviesSlice.reducer;
