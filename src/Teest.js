import React from 'react';
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
class Teest extends React.Component{
    render() {
        return (
            <div class="jumbotron text-center">
                <CssBaseline />
                <AppBar
                    position="fixed">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                             color="inherit" aria-label="Menu">
                            <MenuIcon style={{height:30,width:50}}/>
                        </IconButton>
                        <Typography variant="h6" noWrap >
                            <h2>ATS SCHOOL</h2>
                        </Typography>
                            <div>
                                <IconButton aria-label="Account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit">
                                </IconButton>
                            </div>
                    </Toolbar>
                </AppBar>
                <main>

                        <Typography variant="h5" component="h3" >
                            <div className={"row"}>
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 m-b-4">
                                    <h3  >Compose Message</h3></div>
                                <div className="col-xs-4 col-sm-2 col-md-4 col-lg-4 m-b-4">
                                    <Button variant="contained"  size="large" color="primary"  >
                                        <b><h5>Compose</h5></b>
                                    </Button></div>
                                <div className="col-xs-4 col-sm-2 col-md-4 col-lg-4 m-b-4">
                                    <Button variant="contained"  color="large" >
                                        <b><h5>clear</h5></b>
                                    </Button>

                                </div></div>
                        </Typography>
                        <div className="row" >
<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15">
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
                            </TextField></div>
<div className="col-xs-4 col-sm-6 col-md-4 col-lg-4 m-b-5">
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
                        </div>
                            <div className="row" >


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
                            <div className={"row"}>
                                <h1 className="col-sm-6 "></h1>
                                <h1 className="col-sm-3"></h1>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            className="col-sm-2"
                                            color="primary"
                                            inputProps={{
                                                'aria-label': 'secondary checkbox',
                                            }}/>
                                    }
                                    label="is Sticky"
                                />
                            </div><br/>
                            <div className={"row"}>
                                <h1 className="col-sm-6"></h1>
                                <Button variant="contained"  size="large" color="primary" style={{width:150}}  >
                                    <b><h5 className="col-sm-6" >ATTACHMENT</h5></b>
                                </Button>&#160;&#160;&#160;

                        </div>
                </main>
            </div>

        );
    }
}

export default Teest;
