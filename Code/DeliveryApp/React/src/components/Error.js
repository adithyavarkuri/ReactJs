import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    return (
        <div>
            <h1>Something went wrong</h1>
            <h3>{err.statusText}</h3>
        </div>
    )
}

export default Error;