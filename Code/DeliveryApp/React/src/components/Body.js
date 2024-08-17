import RestaurantCard, {withPromotedLavbel} from './RestaurantCard'
import restaurants from '../utils/data'
import { useState, useEffect, useContext } from 'react'
import ShimmerUI from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnineStatus';
import UserContext from '../utils/UserContext';


const Body = () => {
  // let [lisOfRestaurants, setLisOfRestaurants] = useState(restaurants);
  let [lisOfRestaurants, setLisOfRestaurants] = useState([])
  let [filteredRestaurants, setFilteredRestaurants] = useState([])
  //let lisOfRestaurants = [];

let [searchText, setSearchText] = useState("");

const RestaurantCardPromoted = withPromotedLavbel(RestaurantCard);

  useEffect(() => {
    fetchData()
  }, [])


  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    )
    const json = await data.json()
   
    setLisOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    )
    setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }
  const onlineStatus = useOnlineStatus();
  console.log("status" + onlineStatus);
  if(onlineStatus === false) return (
    <h1>looks like you are offline</h1>
  )

  if (lisOfRestaurants.length == 0) {
    return <ShimmerUI />
  }

  const {loggedInUser,setUserName} = useContext(UserContext);
 
  return (
    <div className='body'>
      <div className='search m-4 p-4 flex'>
        <div>
          <input type='text' className='border border-solid border-black' data-testid = "searchInput" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input>
          <button className='px-4 py-2 bg-green-100 m-4 rounded-lg' onClick={() => {
            console.log(searchText);
            const filteredList = restaurants.filter(
                res => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
              )
              setFilteredRestaurants(filteredList);

          }}>
            search
          </button>
        </div>
        <div>
          <button
            className='px-4 py-2 bg-gray-100 m-4 rounded-lg'
            onClick={() => {
              const filteredList = restaurants.filter(
                res => res.info.avgRating > 4.5
              )
              setLisOfRestaurants(filteredList)
            }}
          >
            Top Rated Restaurants
          </button>

        </div>

        <div className='search m-4 p-4 flex'>
          <label>UserName :</label>
          <input className='border border-black' onChange={(e) => setUserName(e.target.value)} value= {loggedInUser}></input>
          
        </div>
      </div>
      <div className='res-container flex flex-wrap'>
        {/*
                 <RestaurantCard resName = "Meghana Foods" cuisine="Biryani, Chineese"></RestaurantCard>
                 <RestaurantCard resName = "KFC" cuisine ="Burgers , fried"></RestaurantCard>*/}
        {filteredRestaurants.map(restaurant => (
           <Link  key={restaurant.info.id} to= {"/restaurantMenu/"+restaurant.info.id}>
            {restaurant.info.promoted ? (<RestaurantCardPromoted resData={restaurant}></RestaurantCardPromoted> ) :
         ( <RestaurantCard resData={restaurant} ></RestaurantCard>)}
          </Link>
        ))}

        {/*<RestaurantCard resData = {restaurants[0]}></RestaurantCard>
                <RestaurantCard resData = {restaurants[1]}></RestaurantCard>
                <RestaurantCard resData = {restaurants[2]}></RestaurantCard>
                <RestaurantCard resData = {restaurants[3]}></RestaurantCard>
                <RestaurantCard resData = {restaurants[4]}></RestaurantCard>
                <RestaurantCard resData = {restaurants[5]}></RestaurantCard>
                <RestaurantCard resData = {restaurants[6]}></RestaurantCard>
                <RestaurantCard resData = {restaurants[7]}></RestaurantCard>*/}
      </div>
    </div>
  )
}

const filter = () => {
  console.log('in filter')
  lisOfRestaurants = restaurants.filter(res => res.info.avgRating > 4.5)
  console.log(lisOfRestaurants)
}

export default Body
