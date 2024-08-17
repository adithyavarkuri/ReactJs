import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import Appstore from "../utils/Appstore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

test("it should load headercomponent wirh login button" , () =>{
    render(
        <BrowserRouter>
    <Provider store={Appstore}>
    <Header></Header>
    </Provider>
    </BrowserRouter>);

    //const loginBut = screen.getByRole("button");
    //const loginBut = screen.getByText("Login");
    const loginBut = screen.getByRole("button" , {name : "Login"});
    expect(loginBut).toBeInTheDocument();
});

test(" should render card items as 0" , () =>{
    render(
        <BrowserRouter>
    <Provider store={Appstore}>
    <Header></Header>
    </Provider>
    </BrowserRouter>);

    const cardItems = screen.getByText("Cart (0 Items)");
    expect(cardItems).toBeInTheDocument();
})

test(" should render with cart" , () =>{
    render(
        <BrowserRouter>
    <Provider store={Appstore}>
    <Header></Header>
    </Provider>
    </BrowserRouter>);

    const cardItems = screen.getByText(/Cart /);
    expect(cardItems).toBeInTheDocument();
})

test(" should change login to logout on click" , () =>{
    render(
        <BrowserRouter>
    <Provider store={Appstore}>
    <Header></Header>
    </Provider>
    </BrowserRouter>);

    const loginBut = screen.getByRole("button");
    fireEvent.click(loginBut)
    const logOutBut = screen.getByRole("button" , {name : "Logout"});
    expect(logOutBut).toBeInTheDocument();
})