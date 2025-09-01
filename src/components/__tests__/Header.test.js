import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


// 👇 Add this import statement
import appStore from "../../utils/appStore"; 

test("Should load Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // ... rest of your test code
  const loginButton = screen.getByRole("button");
  expect(loginButton).toBeInTheDocument();
});


