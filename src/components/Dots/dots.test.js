import { screen, render, within } from "@testing-library/react";
import {Dots} from ".";
import slide from "./../../mocks/slide.json";

const renderDots = (slides=[], active= 0) => {
    const setActive = jest.fn()
    return render(<Dots slides={slides} active={active} setActive={setActive} />)
}

test("should render dots snapshot", async () => {
    const dots = renderDots()
    expect(dots).toMatchSnapshot();
});

test("it should render dots list", async () => {
    renderDots(slide,2);
    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(3);
});