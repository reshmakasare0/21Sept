import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
class Datatypes extends React.Component{
constructor(props){
    super(props);
}

    render() {

        return (
            <div className="App">
                <h2>Array:{this.props.propArray}</h2>
                <h2>Boolean:{this.props.propBool ? "True" :"False"}</h2>
                <h2>Func:{this.props.propFunc(3)}</h2>
                <h2>Number:{this.props.propNumber}</h2>
                <h2>String:{this.props.propString}</h2>
                <h2>Object:{this.props.propObject.objectName1}</h2>
                <h2>Object:{this.props.propObject.objectName2}</h2>
                <h2>Object:{this.props.propObject.objectName3}</h2>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                />
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" >
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>

            </div>
        );
    }
}
/*
Datatypes.propTypes = {
    propArray:React.PropTypes.array.isRequired,
    propBool:React.PropTypes.bool.isRequired,
    propFunc:React.PropTypes.func,
    propNumber:React.PropTypes.number,
    propString:React.PropTypes.string,
    propObject:React.PropTypes.object

}
*/

Datatypes.defaultProps = {
    propArray:[1,2,3],
    propBool:true,
    propFunc:function(e){return e},
    propNumber:1,
    propString:"It is string",
    propObject:{
         objectName1:"value 1 obj",
         objectName2:"value 2 obj",
         objectName3:"value 3 obj",
}

}

export default Datatypes;
