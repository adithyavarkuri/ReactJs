import { useEffect, useState } from "react";
import { MENUAPI } from "./constants";

const useRestaurantMenu= (resId) => {

    const [resinfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async() => {
        const data = await fetch(MENUAPI +resId);
        const json = await data.json();
        setResInfo(json.data);
    };
    return resinfo;

}

export default useRestaurantMenu;