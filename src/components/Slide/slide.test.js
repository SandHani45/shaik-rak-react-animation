import { screen, render, within } from "@testing-library/react";
import Slide from ".";
import slides from "./../../mocks/slide.json";
import reviewList from "./../../mocks/review.json";


const renderSlide = (slide=[], reviewList={}) => {
  return render(<Slide slides={slide} reviewList={reviewList} />)
}


test("should render component without fail", async () => {
  const slide = renderSlide();
  expect(slide).toMatchSnapshot();
});

test("it should render No Slide's Available when no slide data from api", async () => {
  renderSlide()
  expect(await screen.findByText("No Slide's Available")).toBeVisible();
});

test("it should render slides component", async () => {
    renderSlide(slides,reviewList);
  expect(await screen.getByTestId("slides")).toBeVisible();
});

test("it should render slides count", async () => {
  const { container } = renderSlide(slides,reviewList);
  expect(container.getElementsByClassName("slide")).toHaveLength(3);
});

test("it should render dots list", async () => {
  renderSlide(slides,reviewList);
  const list = screen.getByRole("list");
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  expect(items.length).toBe(3);
});

test("it should render slide icon's", async () => {
  const { container } = renderSlide(slides,reviewList);
  expect(container.getElementsByClassName("emoji-label")).toHaveLength(9);
  expect(container.getElementsByClassName("emoji-icon")).toHaveLength(9);
});
