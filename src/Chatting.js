import React from 'react';
import './App.css';

//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

/*import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';*/

class Chatting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            m1:"",
            m2:"",
            v:true,
            show:true,
            v2:true


        };
    }

    render() {
        const {show}=this.state
        const {v}=this.state
        const {v2}=this.state
        return(
            <div className={"div"}>

                <font color="red"> <b>  <h2>INDEX</h2></b></font><br/>


                {show ?

                    <div>
                        {v ?
                            <div>
                                <div>
                                    {v2 ?
                                        <div>
                                            <font color="red"><h5>YOU:</h5></font>

                                            <input type={"text"} value={this.state.m1} className={"text"} placeholder={"Type a message"}
                                             onChange={(event) => this.setState({ m1:event.target.value,v:true})}/>
                                        </div>
                                  :<div>

                                            <input type={"text"} value={this.state.m2} className={"text"}/><br/><br/>

                                            <font color="red"><h5>YOU:</h5></font>

                                            <input type={"text"} value={this.state.m1} className={"text"} placeholder={"Type a message"}
                                                   onChange={(event) => this.setState({ m1:event.target.value,v:true})}/><br/>



                                        </div>}</div>
                                    </div>


                                    :

                                <input type={"text"} value={this.state.m2} className={"text"}/>}


                        <br/><br/>

                                <input type={"submit"} value={"Send"} className={"b"}  onClick={() => {
                                    this.setState({
                                        show:false ,v:true
                                    });
                                }}/>
                                <a href="https://www.google.com/search?q=emoji+images&client=ubuntu&hs=il0&channel=fs&tbm=isch&source=iu&ictx=1&fir=Sy6jrr3QZzkzaM%253A%252CYXh_mPrRiN9t7M%252C_&vet=1&usg=AI4_-kTFv9DObFcpDQADk6NNYEFXJINoYQ&sa=X&ved=2ahUKEwi2jPiQhsPiAhVX7XMBHYVZAHMQ9QEwCXoECAUQFg&biw=1855&bih=982#imgrc=Sy6jrr3QZzkzaM:">
                                    <img src=" " className={"img"}/></a>

                    </div>

                    :

                    <div>
                        <input type={"text"} value={this.state.m1} className={"text"}/><br/><br/>

                                <font color="red"><h5>FRIEND:</h5></font>
                                <input type={"text"} value={this.state.m2} className={"text"} placeholder={"Type a message"}
                                       onChange={(event) => this.setState({ m2:event.target.value})}/>



<br/><br/>
                        <input type={"submit"} value={"Send"} className={"b"}
                                       onClick={() => {this.setState({show:true,v:true,m1:"",v2:false});}}/>
                        <a href="https://www.google.com/search?q=emoji+images&client=ubuntu&hs=il0&channel=fs&tbm=isch&source=iu&ictx=1&fir=Sy6jrr3QZzkzaM%253A%252CYXh_mPrRiN9t7M%252C_&vet=1&usg=AI4_-kTFv9DObFcpDQADk6NNYEFXJINoYQ&sa=X&ved=2ahUKEwi2jPiQhsPiAhVX7XMBHYVZAHMQ9QEwCXoECAUQFg&biw=1855&bih=982#imgrc=Sy6jrr3QZzkzaM:">
                            <img src=" " className={"img"}/></a>

                    </div>


                }
            </div>



        );
    }
}
export default Chatting;
