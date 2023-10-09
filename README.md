# React & jest-cucmber

## 1. Create react app

```bash
npx create-react-app my-project
```

## Install jest cucumber

```bash
npm i -D jest-cucumber 
```

## 3. Define test file extension

In the ```package.json``` file add

```json

  "name": "project-name",
  // content...
  "jest": {
    "testMatch": [
      "**/*.steps.js",
      "**/*.steps.tsx"
    ]
  }
```

## 4. Create your gherkin file

```gherkin
# src/components/custom-button/__tests__/CustomButton.feature
Feature: Custom button

    For test
    Scenario: button is clicked and make action
        Given I create my button with counter to 1 and a onClick function
        When I click to my button
        Then My function is called
```

## 5. Create the step definition file

```tsx
// src/components/custom-button/__tests__/CustomButton.steps.tsx
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

```

## Run your tests

```shell
npm run test
```

## And enjoy 😊
