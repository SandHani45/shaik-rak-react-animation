import { screen, render, within } from "@testing-library/react";
import {ReviewSlide} from "./review-slide";
import reviewList from "./../../mocks/review.json";

const renderReview = () => {
    const onReviewSubmit = jest.fn()
    return render(<ReviewSlide {...reviewList} onReviewSubmit={onReviewSubmit} />)
}

test("should render review component without fail", async () => {
    renderReview()
    expect(await screen.findByText("An overview of your answers")).toBeVisible();
});

test("should render submit button", async () => {
    renderReview()
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    expect(submitButton).toBeVisible();
});
 