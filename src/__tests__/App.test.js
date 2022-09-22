import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import App from "../App";

describe("<App/>", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test("should render <Header/>", () => {
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  test("should render <Movies/>", () => {
    const movies = screen.getByTestId("movies");
    expect(movies).toBeInTheDocument();
  });
});
