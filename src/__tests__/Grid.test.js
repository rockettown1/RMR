import { render, screen, fireEvent } from "@testing-library/react";
import Grid from "../components/Grid";

describe("Grid component", () => {
  it("should contain 200 divs", async () => {
    render(<Grid width={1000} />);
    const divs = await screen.findAllByRole("pixel");
    expect(divs).toHaveLength(200);
  });

  it("should animate pixel on mouseover", async () => {
    render(<Grid width={1000} />);
    const pixel = screen.getByTestId("pixel20");
    fireEvent.mouseOver(pixel);
    //last frame of keyframe animation
    expect(pixel).toHaveStyle("background-color: none");
  });
});
