import React from "react";
import './App.css';
import Login from './Login'
import Logout from './Logout'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            flag: true,
            isLoginPage:true,
        }
    }

    validation() {
        if (this.state.userName == "" || this.state.userName == undefined) {
            alert("Please Enter Username")
        } else if (this.state.password == "" || this.state.password == undefined) {
            alert("Please Enter Password")
        } else {
            alert("Login Successfully")
        }
    }

    render() {
        return(
        <div>
        {  this.state.isLoginPage ?
          this.state.flag ?

        <div>
             <div className={"mainDiv"}>
                        <h4>Username : <input type={"text"} value={this.state.userName} className={"input"}
                                              onChange={(event) => this.setState({userName: event.target.value})}/>
                        </h4>
                        <h4>Password : <input type={"password"} value={this.state.password} className={"input"}
                                              onChange={(event) => this.setState({password: event.target.value})}/>
                        </h4>
                        <div className={"row"}>
                            <div className="col-md-4 col-sm-4">
                                <h3><input className={"button"} type={"Submit"} name={"Login"} value={"Login"}
                                           onClick={() =>{ this.validation()
                                               this.setState({isLoginPage: false})
                                           }}
                                /></h3>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <h3><input className={"button"} type={"Submit"} name={"Sign Up"} value={"Sign Up"}
                                           onClick={() => {
                                               this.setState({flag: false})
                                           }}
                                /></h3>
                            </div>
                        </div>
                    </div>

        </div>
    :
            <div>
            <div>
                <Login  />
            </div>

            </div>


    :<div>
<Logout {...this.props} userName={this.state.userName}/>
            </div>}
        </div>)
}
}

export default LoginPage;