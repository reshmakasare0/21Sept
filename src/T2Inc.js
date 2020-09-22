import React from 'react';

import './App.css';
class T2Inc extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }



    render() {


        return (
            <div>


                <font color="red" size="5">Click for Increment: {this.props.count}</font>
                <button style={{ height: 10 }}
                    title = { "+" }
                    onClick = {()=> {this.props.Inc()}}
                >
                </button>
            </div>
        );
    }
}

export default T2Inc;
