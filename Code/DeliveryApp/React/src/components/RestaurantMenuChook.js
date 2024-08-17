import { useState, useEffect } from "react"
import ShimmerUI from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENUAPI } from "../utils/constants";
import useRestaurantMenu from "../utils/useResaurantMenu";

const RestaurantMenuChook = () =>{

    const {resId} = useParams();

    const resinfo = useRestaurantMenu(resId);

    if(resinfo == null) return <ShimmerUI></ShimmerUI>
    
        const {name, cuisines, costForTwoMessage} = resinfo?.cards[0]?.card?.card?.info;

const {itemCards} = resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
console.log(itemCards);
    

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{costForTwoMessage}</h2>
            <ul>
                {itemCards.map((item) => (<li>{item.card.info.name}</li> ))}
            
            </ul>
        </div>
    );
};

export default RestaurantMenuChook;