import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body"
import MOCK_DATA from "../mocks/restaurantMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json :() => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

test("Should render the body component", async()=>{
    //fetch is the superpower of browser but not in the js code. so now dom will not understand the fetch
    //for that we need to mock the fetch function
    await act(async() =>    render(
        <BrowserRouter>
        <Body>
    
        </Body>
        </BrowserRouter>)
    );

    const searchBut = screen.getByRole("button" , {name : "search"});
const searchInput = screen.getByTestId("searchInput");
fireEvent.change(searchInput, {target : {value : "ice"}});
fireEvent.click(searchBut);

    expect(searchBut).toBeInTheDocument();
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(3);

})