import React from 'react';


export default class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progressValue: '0%'
        }
    }

    componentWillMount() {
        /* setInterval(()=>{
             this.setState({
                 progressValue: `${parseInt((Math.random()*100).toString())+'%'}`
             })
         }, 1000) */
    }

    changeValue = () => {

    };

    render() {
        return (
            <div style={{
                height: this.props._height != undefined ? this.props._height : 30,
                backgroundColor: this.props._backgroundColor != undefined ? this.props._backgroundColor : 'aliceblue',
                textAlign: 'center',
                margin:10,
                borderRadius: this.props._borderRadius != undefined ? '' : 20
            }}>
                <div style={{
                    height: 'inherit',
                    width: this.props._progressValue != undefined ? this.props._progressValue : '10%',
                    backgroundColor: this.props._barBackgroundColor != undefined ? this.props._barBackgroundColor : 'green',
                    borderRadius: 'inherit'
                }}>
                    <div style={{
                        color: '#fff',
                        display: 'flex',
                        flexFlow: 'column-reverse',
                        fontSize: 14,
                        fontWeight: 'bold',
                        height: 'inherit',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>{this.props._progressValue != undefined ? this.props._progressValue : '10%'}</div>

                </div>
            </div>
        );
    }
}
