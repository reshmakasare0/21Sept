import React from 'react';
export default class New extends React.Component {
    constructor(props) {
        super(props)

        // Bind the this context to the handler function
        this.handler = this.handler.bind(this);

        // Set some state
        this.state = {
            messageShown: false
        };
    }

    // This method will be sent to the child component
    handler() {
        alert("hiiiii")
        this.setState({
            messageShown: true
        });
    }

    // Render the child component and set the action property with the handler as value
    render() {
        return <Child action={this.handler} />
    }
}
class Child extends React.Component {
    render() {
        return (
            <div>
                {/* The button will execute the handler function set by the parent component */}
                <button onClick={this.props.action} >click here</button>
            </div>
        )
    }
}