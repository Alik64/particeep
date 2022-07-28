import moviesSlice, {
  deleteMovie,
  dislikeMovie,
  likeMovie,
  undislikeMovie,
  unlikeMovie,
} from "../redux/moviesSlice";

describe("Reducers", () => {
  test("likeMovie should increment likes of choosen movie", () => {
    let state = {
      data: [
        {
          id: 1,
          title: "Oceans 8",
          category: "Comedy",
          likes: 4,
          dislikes: 1,
        },
        {
          id: 2,
          title: "Midnight Sun",
          category: "Comedy",
          likes: 2,
          dislikes: 0,
        },
      ],
    };
    let expectedState = {
      data: [
        { category: "Comedy", dislikes: 1, id: 1, likes: 5, title: "Oceans 8" },
        {
          category: "Comedy",
          dislikes: 0,
          id: 2,
          likes: 2,
          title: "Midnight Sun",
        },
      ],
    };
    expect(moviesSlice(state, likeMovie(1))).toEqual(expectedState);
  });
  test("unlikeMovie should decrement likes of choosen movie", () => {
    let state = {
      data: [
        {
          id: 1,
          title: "Oceans 8",
          category: "Comedy",
          likes: 4,
          dislikes: 1,
        },
        {
          id: 2,
          title: "Midnight Sun",
          category: "Comedy",
          likes: 2,
          dislikes: 0,
        },
      ],
    };
    let expectedState = {
      data: [
        { category: "Comedy", dislikes: 1, id: 1, likes: 3, title: "Oceans 8" },
        {
          category: "Comedy",
          dislikes: 0,
          id: 2,
          likes: 2,
          title: "Midnight Sun",
        },
      ],
    };
    expect(moviesSlice(state, unlikeMovie(1))).toEqual(expectedState);
  });
  test("dilikeMovie should increment dislikes of choosen movie", () => {
    let state = {
      data: [
        {
          id: 1,
          title: "Oceans 8",
          category: "Comedy",
          likes: 4,
          dislikes: 1,
        },
        {
          id: 2,
          title: "Midnight Sun",
          category: "Comedy",
          likes: 2,
          dislikes: 0,
        },
      ],
    };
    let expectedState = {
      data: [
        { category: "Comedy", dislikes: 2, id: 1, likes: 4, title: "Oceans 8" },
        {
          category: "Comedy",
          dislikes: 0,
          id: 2,
          likes: 2,
          title: "Midnight Sun",
        },
      ],
    };
    expect(moviesSlice(state, dislikeMovie(1))).toEqual(expectedState);
  });
  test("undislikeMovie should decrement dislikes of choosen movie", () => {
    let state = {
      data: [
        {
          id: 1,
          title: "Oceans 8",
          category: "Comedy",
          likes: 4,
          dislikes: 1,
        },
        {
          id: 2,
          title: "Midnight Sun",
          category: "Comedy",
          likes: 2,
          dislikes: 0,
        },
      ],
    };
    let expectedState = {
      data: [
        { category: "Comedy", dislikes: 0, id: 1, likes: 4, title: "Oceans 8" },
        {
          category: "Comedy",
          dislikes: 0,
          id: 2,
          likes: 2,
          title: "Midnight Sun",
        },
      ],
    };
    expect(moviesSlice(state, undislikeMovie(1))).toEqual(expectedState);
  });
  test("deleteMovie should delete choosen movie", () => {
    let state = {
      data: [
        {
          id: 1,
          title: "Oceans 8",
          category: "Comedy",
          likes: 4,
          dislikes: 1,
        },
        {
          id: 2,
          title: "Midnight Sun",
          category: "Comedy",
          likes: 2,
          dislikes: 0,
        },
      ],
    };
    let expectedState = {
      data: [
        {
          category: "Comedy",
          dislikes: 0,
          id: 2,
          likes: 2,
          title: "Midnight Sun",
        },
      ],
    };
    expect(moviesSlice(state, deleteMovie(1))).toEqual(expectedState);
  });
});
