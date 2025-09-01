import React from "react";
class UserClass extends React.Component{
    //create a constructor to receive the props
    constructor(props){
        super(props);
        this.state = {
           userInfo : {
            login : "dummy",
            location : "default"
           }
        };
    }
   async componentDidMount(){
       const data = await fetch("https://api.github.com/users/BheemisettySaiHarsha");
       const json = await data.json();
       console.log(json);
       this.setState({
        userInfo:json
       })
       
    }
    render(){
        //return a piece of jsx code
       
         return (
        <div className="userCard">
            <h1>Name : {this.state.userInfo.login}</h1>
           
            <div className="btn">
            
             </div>
        </div>
    )
    }
}
export default UserClass;