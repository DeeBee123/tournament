import { render, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

const setup = () => {
    const utils = render(<Input />)
    const input = utils.getByLabelText('input')
    return {
      input,
      ...utils,
    }
  }
test("It should add a value to input when it is changed", () => {
  const {input} = setup()
  fireEvent.change(input, {target: {value: 'barcelona'}})
  expect(input.value).toBe('barcelona')
});

test("It should be an empty string when there is no value", () => {
    const {input} = setup()
    expect(input.value).toBe('')
  });


