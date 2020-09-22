import React,{PureComponent} from 'react';
import '../App.css';
import Paper from "@material-ui/core/Paper";


export default class Raisebutt extends PureComponent{
    constructor(props){
        super(props);
        this.state={
        };
    }

    render(){

        return(
            <Paper zDepth={5} style={{backgroundColor:'#ff7db3',height:110,width:270,borderRadius:5,}}>

                </Paper>

        )
    }
}

