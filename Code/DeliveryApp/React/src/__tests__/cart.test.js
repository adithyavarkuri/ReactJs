import { render } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_DATA from "../mocks/restaurantMock.json"

global.fetch =jest.fn(() => {
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})


test("Should test the Restaurnt menu compnenet" , async() =>{

    await act(async () => {
        render(<RestaurantMenu></RestaurantMenu>)
    })

})