import React from 'react';
import './App.css';


class Test1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            color:"pink",
            color1:""

        }
    }
    col(){
        this.setState({color1:this.state.color})
    }

    render() {

        return(

            <div style={{backgroundColor:this.state.color1}}>

                 <input
                    type={"text"}
                    name={"colornm"}
                    placeholder={"Enter Color"}
                    onChange = {(event) =>  {

                        this.setState({color:event.target.value})}
                    }
                /><br/><br/>
                <input
                    type={"button"}
                    name={"colornm"}
                    value={"Change Background"}
                   onClick={()=>{this.col()}}
                /><br/><br/>

            </div>

        );
    }


}
export default Test1;