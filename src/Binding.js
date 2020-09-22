import React from 'react';
import './App.css';

class Binding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "Initial data",
            NewData: "After update"
        }
        this.updateState = this.updateState.bind(this)
    };

    updateState() {
        this.setState({data: "After Update"})
    }

    render() {

        return (
            <div className="App">
                <Header myprop={this.state.data}
                        updateprop={this.updateState}
                ></Header>
            </div>
        );
    }
}

class Header extends React.Component {

    render() {
        console.log(this.props.updateprop)
        return (
            <div>

                <button onClick={() => this.props.updateprop}>click</button>

                <h1>{this.props.myprop}</h1>
            </div>
        );
    }
}

export default Binding;