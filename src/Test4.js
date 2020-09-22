import React from 'react';

import './App.css';



class  Test4 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {


            image1:"https://bit.ly/2wsSRPB",
            image2:"https://bit.ly/2WuNfmp",
          ison:false

        }
    }

    render() {
       const  {ison} = this.state;


        return (
            <div>
                {ison  ?
                <div>

                        <img src={this.state.image1}
                        />


                        <h3> ON button should change according to the status of bulb </h3>

                    </div>


                    : <div>
                        <img src={this.state.image2}/>


                    </div>
                }
                    <input type="button" value={"ON"}
                    onChange={()=>{this.setState({ison:!this.state.ison})}}
                    ></input>
                    </div>

                    );
    }
}

export default Test4;
