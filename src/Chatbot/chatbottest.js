import React from "react";
import ChatBot from 'react-simple-chatbot';

const steps = [
    {
        id: '1',
        message: 'What is your name?',
        trigger: '2',
    },
    {
        id: '2',
        user: true,
        trigger: '3',
    },
    {
        id: '3',
        message: 'Hi {previousValue}, nice to meet you!',
        end: true,
    }
]

class Chatbottest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <ChatBot steps={steps}/>
            </div>
        )
    }
}

export default Chatbottest;