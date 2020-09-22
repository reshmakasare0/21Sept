import React from 'react';
import {tsQualifiedName} from "@babel/types";
import './App.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
class Combo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            salary:"",
            age:"",
            id:"",
            item:[],
            isLoad:true
        }
    }
    render() {
        return (
            <body >
            <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-3">
                <div class="container-fluid">

                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                        <AppBar
                                position="fixed">
                                <Toolbar>
                                    <IconButton
                                        color="inherit"
                                        color="inherit" aria-label="Menu">
                                        <MenuIcon style={{height:30,width:50}}/>
                                    </IconButton>
                                        <h2>ATS SCHOOL</h2>
                                </Toolbar>
                            </AppBar>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="container">
                <div >
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <h3  >Compose Message</h3></div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                            <Button variant="contained"  size="large" color="primary"  >
                                <b><h5>Compose</h5></b>
                            </Button></div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                            <Button variant="contained"  color="large" >
                                <b><h5>clear</h5></b>
                            </Button></div></div>
                </div>
            </div>

                <div class="row">
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <TextField
                            select
                            required
                            style={{width:400}}
                            label={"Event types "}
                            margin="normal"

                            SelectProps={{
                                MenuProps: {},
                            }}
                            margin="normal"
                            variant="outlined"
                            placeholder="Placeholder">
                            <MenuItem style = {{width:400}}>
                                <h4>    jjj    </h4>
                            </MenuItem>
                            <MenuItem style = {{width:400}}>
                                <h4>    kkk   </h4>
                            </MenuItem>
                        </TextField>
                    </div>
                    <div class="col-md-5 col-lg-3 col-xl-2">

                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <TextField
                            style={{width:400}}
                            margin="normal"
                            SelectProps={{
                                MenuProps: {
                                },
                            }}
                            margin="normal"
                            variant="outlined"
                            paceholder="Subject"
                        ></TextField>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <TextField
                            select
                            label="Select"
                            required
                            style={{width:400}}
                            label={"Recipient type "}
                            margin="normal"
                            SelectProps={{
                                MenuProps: {
                                },
                            }}
                            margin="normal"
                            variant="outlined"
                        >
                            <MenuItem  style= {{width:400}}>
                                <h4>   jjjjj    </h4>
                            </MenuItem>

                            <MenuItem  style= {{width:400}}>
                                <h4>   ffff    </h4>
                            </MenuItem>
                        </TextField>
                    </div>
                    <div class="col-md-5 col-lg-3 col-xl-2">

                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <TextField
                            style={{width:400}}
                            multiline
                            rows="4"
                            margin="normal"
                            SelectProps={{
                                MenuProps: {
                                },
                            }}
                            margin="normal"
                            variant="outlined"
                            placeholder="Message"
                        ></TextField>
                    </div>
                    <div class="col-md-10 col-lg-8 col-xl-7">

                    </div>
                    <div class="col-md-2 col-lg-1 col-xl-1">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="checkedB"
                                    color="primary"
                                    inputProps={{
                                        'aria-label': 'secondary checkbox',
                                    }}/>
                            }
                            label="is Sticky"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                    </div>
                    <div class="col-md-6 text-md-right">
                        <Button variant="contained"  size="large" color="primary" style={{width:150}}  >
                            <b><h5 className="col-sm-6" >ATTACHMENT</h5></b>
                        </Button>&#160;&#160;&#160;
                    </div>
            </div>
            </body>

        );
    }
}

export default Combo;