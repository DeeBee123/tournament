import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Pagination from "./Pagination";

render(<Pagination nPages={3} currentPage={2} />);
test("It should disable the button of a current page", () => {
  const btn = screen.getByTestId("pNumb2");
  fireEvent.click(btn);
  expect(btn).toBeDisabled();
});
