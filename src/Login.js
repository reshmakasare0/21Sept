import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            add: "",
            age: "",
            mob: "",
            aadhar: "",
            gender: 0,
            pan: "",
            city: 0,
            country: 0,
            state: 0,
        }
    }

    validation() {
        if (this.state.name == "" || this.state.name == undefined) {
            alert("Please Enter Name")
        } else if (this.state.add == "" || this.state.add == undefined) {
            alert("Please Address")
        } else if (this.state.age == "" || this.state.age == undefined) {
            alert("Please Enter age")
        } else if (this.state.mob == "" || this.state.mob == undefined) {
            alert("Please Enter mob")
        } else if (this.state.aadhar == "" || this.state.aadhar == undefined) {
            alert("Please Enter aadhar")
        } else if (this.state.gender == 0) {
            alert("Please select gender")
        } else if (this.state.pan == "" || this.state.pan == undefined) {
            alert("Please Enter PAN")
        } else if (this.state.city == 0) {
            alert("Please select city")
        } else {
            alert("login successfully!!!")
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <font size={"30"} color={"steelBlue"}> Registration </font>
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <h4> Name: <input type={"text"} value={this.state.name} className={"input"}
                                              onChange={(event) => this.setState({name: event.target.value})}/>
                            </h4>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <h4> Address: <input type={"text"} value={this.state.add} className={"input"}
                                                 onChange={(event) => this.setState({add: event.target.value})}
                                                 name={"pass"}/>
                            </h4>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <h4>Age:<input type={"text"} value={this.state.age} className={"input"}
                                           onChange={(event) => this.setState({age: event.target.value})}/>
                            </h4></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <h4>Mobile No:<input type={"text"} value={this.state.mob} className={"input"}
                                                 onChange={(event) => this.setState({mob: event.target.value})}/>
                            </h4>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <h4>Aadhar:<input type={"text"} value={this.state.aadhar} className={"input"}
                                              onChange={(event) => this.setState({aadhar: event.target.value})}/>
                            </h4>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <h4>PAN : <input type={"text"} value={this.state.pan} className={"input"}
                                             onChange={(event) => this.setState({pan: event.target.value})}/>
                            </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <h4>Gender: </h4>
                            <select value={this.state.gender} className={"input"}
                                    onChange={(event) => this.setState({gender: event.target.value})}>
                                <option>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <h4>City: </h4>
                            <select value={this.state.city} className={"input"}
                                    onChange={(event) => this.setState({city: event.target.value})}>
                                <option>Select City</option>
                                <option>Pune</option>
                                <option>Mumbai</option>
                                <option>Delhi</option>
                            </select>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <h4>Contry: </h4>
                            <select value={this.state.country} className={"input"}
                                    onChange={(event) => this.setState({country: event.target.value})}>
                                <option>Select Country</option>
                                <option>India</option>
                                <option>Russia</option>
                                <option>USA</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <h4>State: </h4>
                        <select value={this.state.state} className={"input"}
                                onChange={(event) => this.setState({state: event.target.value})}>
                            <option>Select State</option>
                            <option>Maharastra</option>
                            <option>MP</option>
                            <option>Gujrat</option>
                        </select>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <h3><input className={"button"} type={"submit"} name={"submit"} value={"Submit"}
                                   onClick={() => {
                                       this.validation()
                                   }}/></h3>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <h3><input className={"button"} type={"Submit"} name={"Clear"} value={"Clear"} onClick={() => {
                            this.setState({name: "", add: "", age: "", mob: "", aadhar: "", gender: 0, pan: "", city: 0, country: 0, state: 0,
                            })
                        }}/></h3>

                    </div>

                </header>
            </div>
        );
    }
}



export default App;
