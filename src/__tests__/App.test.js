import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("should render the poem", () => {
    render(<App />);
    const line1 = screen.getByText(/Let everything happen to you/i);
    const line2 = screen.getByText(/Beauty and terror/i);
    const line3 = screen.getByText(/Just keep going/i);
    const line4 = screen.getByText(/no feeling is final/i);
    expect(line1).toBeInTheDocument();
    expect(line2).toBeInTheDocument();
    expect(line3).toBeInTheDocument();
    expect(line4).toBeInTheDocument();
  });

  it("should display author, and in white text", () => {
    render(<App />);
    const author = screen.getByText(/Rainer Maria Rilke/i);
    expect(author).toHaveStyle("color: white");
  });
});
