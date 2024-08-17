import { render, screen } from "@testing-library/react";
import ContactUs from "../components/ContactUs";
import "@testing-library/jest-dom"


//for grouping testcases
describe("Contact us page testcases" ,() =>{

/**
beforeAll(() => {
    console.log("Before All");
});;

afterAll(() => {
    console.log("After All");
});;
beforeEach(() => {
    console.log("Before Each");
});

afterEach(() => {
    console.log("After Each");
})

 */

    test ("contact paged rendered or not" , () =>{

        render(<ContactUs></ContactUs>);
       const heading = screen.getByRole("heading");
       expect(heading).toBeInTheDocument();
    })
    
    test ("load button component" , () =>{
    
        render(<ContactUs></ContactUs>);
       const button = screen.getByText("Submit");
       expect(button).toBeInTheDocument();
    })
    
    test ("load input component" , () =>{
    
        render(<ContactUs></ContactUs>);
       const inputName = screen.getByPlaceholderText("name");
       expect(inputName).toBeInTheDocument();
    })
    
    test ("load  two input components" , () =>{
    
        render(<ContactUs></ContactUs>);
       const inputBoxes = screen.getAllByRole("textbox");
       expect(inputBoxes.length).toBe(2);
    })
})

