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
      const indextoFind = state.data.findIndex(
        (item) => item.id === action.payload
      );
      state.data[indextoFind].likes += 1;
    },
    unlikeMovie: (state, action) => {
      const indextoFind = state.data.findIndex(
        (item) => item.id === action.payload
      );
      state.data[indextoFind].likes -= 1;
    },
    dislikeMovie: (state, action) => {
      const indextoFind = state.data.findIndex(
        (item) => item.id === action.payload
      );
      state.data[indextoFind].dislikes += 1;
    },
    undislikeMovie: (state, action) => {
      const indextoFind = state.data.findIndex(
        (item) => item.id === action.payload
      );
      state.data[indextoFind].dislikes -= 1;
    },
    deleteMovie: (state, action) => {
      state.data = state.data.filter((movie) => movie.id !== action.payload);
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
