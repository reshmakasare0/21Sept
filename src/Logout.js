import React from "react";
import './App.css';
import Img from './image-150nw-274138187.png'
import Img1 from './logoutIcon.png'
import LoginPage from './loginPage'
class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            isLogout: true,
            message: '',

        }
    }


    render() {
        return (
            <div>
                {this.state.isLogout ?
                    <div style={{height: 50, backgroundColor: "pink"}}>
                        <img onClick={() => this.setState({flag: !this.state.flag})} className={"logo"} src={Img}/>
                        <img onClick={() => this.setState({isLogout: !this.state.isLogout})} className={"logo"}
                             style={{marginLeft: 1270}} src={Img1}/>
                        {/* {this.state.flag ?
                        <div style={{height: 1000, width: 300, backgroundColor: "pink"}}>
                            <h1>User1</h1>
                            <h1>User2</h1>
                        </div> : null}
                    {this.state.isLogout ?
                        <div style={{height:150,width:300,marginLeft: 1200,backgroundColor: "skyblue"}}>
                            <h1>Profile</h1>
                            <h1>Logout</h1>

                        </div>:null}*/}

                        <div className={"row"}> {/*This is our main div section*/}
                            {this.state.flag ? <div
                                className={"leftDrawer"}>  {/*this is divide for left part to show and hide on the click of button*/}
                                <h1 onClick={() => {
                                    this.setState({message: 'Reshma ji'})
                                }}>User1</h1>
                                <h1>User2</h1>
                            </div> : null}

                            <div
                                className={"renderBodyElements"}> {/*Which page we want to display just write and return here*/}
                                {`Welcome ${this.props.userName}`} {/*You can write can another way like-- {"Welcome "+ this.state.message}*/}
                            </div>
                        </div>

                    </div>
                    :
                    <div>

                        <LoginPage {...this.props} userName={this.props.userName} />

                    </div>
                }
            </div>


        )
    }
}

export default Logout;