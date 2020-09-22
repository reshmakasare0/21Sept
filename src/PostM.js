import React from 'react';
import axios from 'axios';
import './App.css';
class PostM extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            salary:"",
            age:"",
            id:""


        }
    }

render() {

    return (
        <div className="App">
            <div className="row">
                <div className="col-sm-3">
                    <b>    Name: </b>    <input type={"text"}
                                                value={this.state.name} placeholder="name" onChange={(event)=>
                    this.setState({name:event.target.value})}/>
                </div>
                <div className="col-sm-3">

                    <b>  salary:  </b>   <input type={"text"} placeholder="salary"
                                                value={this.state.salary} onChange={(event)=>
                    this.setState({salary:event.target.value})}/>
                </div>
                <div className="col-sm-3">

                    <b>   Age:  </b>   <input type={"text"} placeholder="Age"
                                              value={this.state.age}
                                              onChange={(event)=>
                                                  this.setState({age:event.target.value})}/>
                </div>
                <div className="col-sm-3">

                    <b>Id:  </b>   <input type={"text"} placeholder="id"
                                          value={this.state.id}
                                          onChange={(event)=>
                                              this.setState({id:event.target.value})}/>
                </div></div>
        </div>
    );
}
}

export default PostM;
