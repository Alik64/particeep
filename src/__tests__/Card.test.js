import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Card from "../components/Movies/Card";

describe("<Card/>", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Card />
      </Provider>
    );
  });

  test("should render card title , category, gauge,stats ", () => {
    const card_title = screen.getByTestId("card_title");
    const card_category = screen.getByTestId("card_category");
    const card_gauge = screen.getByTestId("card_gauge");
    const card_stats = screen.getByTestId("card_stats");

    expect(card_title).toBeInTheDocument();
    expect(card_category).toBeInTheDocument();
    expect(card_gauge).toBeInTheDocument();
    expect(card_stats).toBeInTheDocument();
  });

  test("should not render director ", () => {
    const director = screen.queryByText("Quentin Tarantino");
    expect(director).toBeNull();
  });

  test("should be 'unliked' and 'undisliked at first render", () => {
    const unliked = screen.getByTestId("card_unliked");
    const undisliked = screen.getByTestId("card_undisliked");

    const disliked = screen.queryByTestId("card_disliked");
    const liked = screen.queryByTestId("card_liked");

    expect(unliked).toBeInTheDocument();
    expect(undisliked).toBeInTheDocument();

    expect(liked).toBeNull();
    expect(disliked).toBeNull();
  });
});
