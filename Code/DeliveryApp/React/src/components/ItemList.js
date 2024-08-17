import { useDispatch } from "react-redux";
import { CDNURL } from "../utils/constants";
import { additem } from "../utils/CartSlice";

const ItemList = ({ itemList }) => {
  console.log(itemList);

  const dispatch = useDispatch();

  const handleAddItem =(item) =>
{
dispatch(additem(item));


}

  return (
    <div>
      {itemList.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="p-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
           <div className="absolute">
            <button className="p-2 bg-white shadow-lg mx-16 rounded-lg"><span className="text-green-600" 
            onClick={() => handleAddItem(item)}> Add +</span></button>
            </div>
            <img src={CDNURL + item.card.info.imageId} className="w-full"></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
