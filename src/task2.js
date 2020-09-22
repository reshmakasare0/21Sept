import React from 'react';


import './App.css';
class Task2 extends React.Component {

    constructor(props) {
        super(props);

         this.state = {

                  count: 0,
                  num:0


        }
    }

    Increment(){
        this.setState({ count: this.state.count + this.state.num});
    }

    render() {


        return(
            <div>
                <center>
                    <br/>
                    <br/>
                    <br/>

                    Enter No:  <input
                    type={"text"}
                    name={"number"}
                    placeholder={"Number"}
                    value={this.state.num}
                    onChange = {(event) =>  {

                        this.setState({num:event.target.value})}
                    }
                /><br/><br/>
                <font color="red" size="5"> count : {this.state.count}</font><br/><br/>


                <font color="red" size="5">Click for Increment: {this.props.count}</font>
                <button
                        name={"increment"}

                        onClick = {()=> {this.Increment()}}>

                    Increment

                </button>
                </center>





            </div>
        )
    }
}

export default Task2;
