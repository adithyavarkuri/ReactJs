import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLavbel } from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resdata.json";
import "@testing-library/jest-dom"


test("It should render restaurant component with props" , ()=>{
    render(
    <RestaurantCard resData={MOCK_DATA}>

    </RestaurantCard>);

const name = screen.getByText("Pizza Hut");
expect(name).toBeInTheDocument();

})

/**
test("It should render restaurant component with promoted label" , ()=>{
    render(
    withPromotedLavbel(MOCK_DATA)
        );

const name = screen.getByText("Pizza Hut");
expect(name).toBeInTheDocument();

})
 */