
import React from 'react';

import './App.css';




class Sample extends React.Component {

    constructor(){
        super();
        this.state = {
            message: "my friend!"
        };
        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage() {
        this.setState({
            message: "my friend changed state!!!"
        });
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.message}!</h1>
                <button onClick={this.updateMessage}>Click me!</button>
            </div>
        )
    }
}

export default Sample;
