import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Router, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import RestaurantMenuChook from "./components/RestaurantMenuChook";
import ShimmerUI from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import Appstore from "./utils/Appstore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

    const [userName, setUserName] =useState();

    useEffect(() => {
        const data  ={
            name : "Varkuri Adithya",
        };
        setUserName(data.name);

    }, [])

    return (
        <Provider store={Appstore}>
        <UserContext.Provider value = {{loggedInUser : userName ,setUserName}}>
        <div className = "app">
            <Header></Header>
            <Outlet></Outlet>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}


const appRouter = createBrowserRouter(
    [
        {
            path : "/",
            element : <AppLayout></AppLayout>,
            children:[
                {
                    path : "/",
                    element :<Body></Body>
                },
                {
                    path : "/About",
                    element :<About></About>
                },
                {
                    path:"/ContactUs",
                    element : <ContactUs></ContactUs>
                },
                {
                    path:"/grocery",
                    element : <Suspense fallback = {<ShimmerUI></ShimmerUI>}><Grocery></Grocery></Suspense> 
                },
                {
                    path:"/restaurantMenu/:resId",
                    element : <RestaurantMenu></RestaurantMenu>
                   /** element : <RestaurantMenuChook></RestaurantMenuChook> */
                },
                {
                    path:"/cart",
                    element :<Cart></Cart>
                }
            ],
            errorElement : <Error></Error>
        }
        
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));





//root.render(<AppLayout></AppLayout>)
root.render(<RouterProvider router={appRouter}></RouterProvider>)