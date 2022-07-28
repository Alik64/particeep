import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("<Header/>", () => {
  beforeEach(() => {
    render(<Header />);
  });

  test("should render a logo and a contributor name", () => {
    const logo = screen.getByTestId("logo");
    const contributor = screen.getByTestId("contributor");

    expect(logo).toBeInTheDocument();
    expect(contributor).toBeInTheDocument();
  });
});
