
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    handleClearCart = () => {
        dispatch(clearCart());

    };

    return (
        <div className="text-center m-10 p-10">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg"
                onClick={handleClearCart}>ClearCart</button>
                <ItemList itemList ={cartItems}></ItemList>
                {cartItems == 0 && (<h1>Cart is empty. pls add items</h1>)}
            </div>
        </div>
    )
}

export default Cart;