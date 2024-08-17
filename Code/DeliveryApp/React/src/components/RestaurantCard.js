import {CDNURL} from "../utils/constants";

const styleCard = {
    //backgroundColor : "#f0f0f0"
}

const RestaurantCard = (props) =>{
    const { resData } = props;
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, promoted} =  resData?.info;



    return (
        <div data-testid="resCard" className="res-card m-4 p-4 w-[220px] shadow-lg bg-gray-200 rounded-lg hover:bg-gray-400" style={styleCard}>
            <img className="res-logo rounded-lg" alt="res-logo"
             src = {
                CDNURL +
           cloudinaryImageId}
                ></img>
            <h3 className="font-bold py-1 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
};

//input restaurantcard , output - promoted restaurant card

//higherorderfunction

export const withPromotedLavbel = (RestaurantCard) =>{

    return (props) =>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}></RestaurantCard>
            </div>

        );
    };
}


export default RestaurantCard;