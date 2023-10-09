import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomButton from "../CustomButton";

const { defineFeature, loadFeature } = require("jest-cucumber");

const feature = loadFeature(
  "src/components/custom-button/__tests__/CustomButton.feature"
);

defineFeature(feature, (test: Function) => {
  test("button is clicked and make action", ({ given, then, when }: any) => {
    const mock = jest.fn();
    given(
      /I create my button with counter to (\d) and a onClick function/,
      (num: number) => {
        render(<CustomButton onClick={mock}>{num}</CustomButton>);
        const count = screen.getByText(num.toString());
        expect(count).toBeInTheDocument();
      }
    );
    when(/I click to my button/, async () => {
      const button = screen.getByRole("button", { name: /click here/i });
      expect(button).toBeInTheDocument();
      userEvent.click(button);
    });
    then(/My function is called/, () => {
      expect(mock).toHaveBeenCalled();
    });
  });
});
