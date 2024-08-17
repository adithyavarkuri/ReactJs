
import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            count : 1,
            count2 :10,
            userInfo :{
                name :"dummy",
                location : "default",
                avatar_url : ""
            }
        };

    }
    render(){
        const {name ,login, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <h3>count : {this.state.count}</h3>
                <img src={avatar_url}></img>
                <button onClick={() => {
                    this.setState({
                        count : this.state.count +1,
                        count2 : this.state.count2 +1
                    });

                }
                }>IncCount</button>
                <h3>count : {this.state.count2}</h3>
                <h1>name: {name}</h1>
                <h1>login: {login}</h1>
                <h2>location : hyd</h2>
    
            </div>
        ) 

    }

    async componentDidMount(){
        
        const data = await fetch("https://api.github.com/users/Adithyavarkuri");
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo : json
        })
    }

}

export default UserClass