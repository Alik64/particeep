const getIsLoadingValue = (state) => state?.isLoading || false;
const getDataValue = (state) => state?.data || null;

describe("getIsLoadingValue", () => {
  test("should return a 'false' if empty state", () => {
    expect(getIsLoadingValue({})).toBe(false);
  });
});

describe("getDataValue", () => {
  test("should return 'null' if empty state", () => {
    expect(getDataValue({})).toBe(null);
  });
  test("should return array of movies if given the state ", () => {
    let state = {
      data: [
        {
          id: "1",
          title: "Oceans 8",
          category: "Comedy",
          likes: 4,
          dislikes: 1,
        },
        {
          id: "2",
          title: "Midnight Sun",
          category: "Comedy",
          likes: 2,
          dislikes: 0,
        },
        {
          id: "3",
          title: "Les indestructibles 2",
          category: "Animation",
          likes: 3,
          dislikes: 1,
        },
      ],
    };
    expect(getDataValue(state)).toBe(state.data);
  });
});
