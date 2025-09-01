import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact page test page",()=>{
test("should load contact us page",()=>{
//to test this we have to render the component to the jsdom
//We will try to check whether the heading is in the page or not
//What ever will be rendered will get access from the screen
    render(<Contact/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})
//lets also check whether a button is there or not
test("should load button inside contact us page",()=>{
//to test this we have to 
// render the component to the jsdom
//We will try to check whether the heading is in the page or not
//What ever will be rendered will get access from the screen
    render(<Contact/>);
    const button = screen.getByRole("button");
    //assertion
    expect(button).toBeInTheDocument();
})
//what is this getByRole it can be heading,button,...
//Also there is one more way to find button using getByText
//We will check by checking the text submit and that is the button
test("should load 3 input boxes on the contact component", () => {
  render(<Contact />);
  
  // Use getAllByRole to find multiple elements
  const inputBoxes = screen.getAllByRole("textbox"); 
  
  // Assert that the length of the array is 3 (for name, email, and message)
  expect(inputBoxes.length).toBe(3); 
});
})
