import { render } from "@testing-library/react";
import { Button } from "./Button";

const setup = () => {
  const utils = render(<Button testId="btn" text="text" />);
  const btn = utils.getByTestId("btn");
  return {
    btn,
    ...utils,
  };
};
test("It should have text inside of a button", () => {
  const { btn } = setup();
  expect(btn.textContent).toBe("text");
});

test("It should render a button with the class of btn", () => {
  const { btn } = setup();
  expect(btn.className).toBe("btn");
});
