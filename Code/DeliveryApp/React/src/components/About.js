import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>This is Delivery App</h1>
            <div>
                LoggedInUser 
                <UserContext.Consumer>
                    {({loggedInUser}) => (
                        <h1>{loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
            </div>
            <User name ={"Adithya - function"}></User>
            <UserClass name ={"Adithya - class"}></UserClass>
        </div>
    )
}

export default About;