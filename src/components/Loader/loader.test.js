import { screen, render, within } from "@testing-library/react";
import Loader from ".";

const renderLoader = () => {
    return render(<Loader  />)
}

test("should render loader snapshot", async () => {
    const loader = renderLoader()
    expect(loader).toMatchSnapshot();
});

test("it should loader component", async () => {
    const { container } = renderLoader();
    expect(container.getElementsByClassName("loader")).toHaveLength(1);
});