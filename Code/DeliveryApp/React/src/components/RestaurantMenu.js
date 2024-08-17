import { useState, useEffect } from "react";
import ShimmerUI from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENUAPI } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resinfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const [showIndex , setShowIndex] = useState(0);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENUAPI + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
    console.log(resinfo?.cards[0]?.card?.card?.info.name);
  };

  //const {name, cuisines, costForTwoMessage} = resinfo?.cards[0]?.card?.card?.info;

  if (resinfo == null) return <ShimmerUI></ShimmerUI>;

  const { name, cuisines, costForTwoMessage } =
    resinfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


  const categories =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    
  return (
    <div className="text-center">
        <h1 className="font-bold my-6 text-2xl ">{name}</h1>
        <p className="font-bold">{costForTwoMessage}</p>
{/**controlled componenet */}
        {categories.map((category, index) =>
          <RestaurantCategory key={category?.card?.card.title} data= {category?.card.card}
          showItems = {index == showIndex && true}
          setShowIndex={() => setShowIndex(index)}></RestaurantCategory> )}

    </div>




   /** <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{costForTwoMessage}</h2>
      <ul>
        {itemCards.map((item) => (
          <li>{item.card.info.name}</li>
        ))}
      </ul>
    </div> */
  );
};

export default RestaurantMenu;
