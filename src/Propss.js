import React from 'react';

import './App.css';
class Propss extends React.Component{
constructor(props){
    super(props);
    this.state={
       header:"hiiiii"
    }
}
/*
    render() {

        return (
            <div className="App">
<h1>{this.props.headerprop}</h1>
            </div>
        );
    }
}
Propss.defaultProps={
    headerprop:"Use of propssss"
}*/

    render() {

        return (
            <div className="App">
                <Header headerProp={this.state.header} />
            </div>
        );
    }
}

class Header extends React.Component {

render() {

    return (
        <div >
            <h1>{this.props.headerProp}</h1>
        </div>
    );
}
}
export default Propss;
