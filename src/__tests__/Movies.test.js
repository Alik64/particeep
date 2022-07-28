import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Movies from "../components/Movies";

describe("<Movies/>", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Movies />
      </Provider>
    );
  });

  test("should render <MySelect/>", () => {
    const mySelect = screen.getByTestId("mySelect");
    expect(mySelect).toBeInTheDocument();
  });

  test("should render <ButtonGroup/>", () => {
    const buttonGroup = screen.getByTestId("buttonGroup");
    expect(buttonGroup).toBeInTheDocument();
  });
  test("should render <Pagination/>", () => {
    const pagination = screen.getByTestId("pagination");
    expect(pagination).toBeInTheDocument();
  });

  test("should render <Card/>", async () => {
    const cards = await screen.findAllByTestId("card");
    cards.forEach((card) => expect(card).toBeInTheDocument());
  });
});
