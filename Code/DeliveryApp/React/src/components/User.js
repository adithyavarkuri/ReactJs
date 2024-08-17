import { useEffect, useState } from "react";

const User = (props) => {

        useEffect(() =>{

        } , []);

        async function getUser(){
            
        }

    const [count, setCount] = useState(0);
    const [count2] = useState(0);
    return (
        <div className="user-card">
            <h3>count : {count}</h3>
            <h3>count2 : {count2}</h3>
            <h1>name: {props.name}</h1>
            <h2>location : hyd</h2>

        </div>
    )
}

export default User;