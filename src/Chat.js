import React from 'react';
import './App.css';


class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state = {

            m1:"",
                m2:"",
            v:true,
            show:true

        }
    }


    render() {
        const {show}=this.state
        return(
            <div>


                {show ?

                    <div>

                        <div className="row">
                            <div className="col-md-2 col-sm-2">

                            msg1: <input type={"text"} value={this.state.m1} placeholder={"type sms"}
                                     onChange={(event) => this.setState({ m1:event.target.value})}/>
                            </div>

                                <div className="col-md-2 col-sm-2">

                                <input type={"submit"} value={"Send"}  onClick={() => {
                            this.setState({
                                show:false
                            });
                        }}/>
                                </div></div>
                    </div>

                    :

                    <div>
                        <div className="row">
                            <div className="col-md-2 col-sm-2">

                            msg2: <input type={"text"} value={this.state.m2} placeholder={"type sms"}/>
                            </div>

                                <div className="col-md-2 col-sm-2">
                                    <input type={"submit"} value={"Send"}
                           onClick={() => {this.setState({show:true});}}/>
                                </div></div>
                    </div>

                }
            </div>



    );
    }
}
export default Chat;
