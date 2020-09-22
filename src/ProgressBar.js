import React from 'react';


export default class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
                width: this.props.width != undefined ? this.props.width : 1000,
                display: 'flex',
                backgroundColor: this.props._backgroundColor != undefined ? this.props._backgroundColor : 'aliceblue',
                textAlign: 'center',
                margin:10,
                borderRadius: this.props._borderRadius != undefined ? this.props._borderRadius : 0
            }}>{this.props._dataList != undefined ?
              this.props._dataList.map((val, ind)=>
                  <div style={{
                      height: 'inherit',
                      width: val.reading,
                      backgroundColor: val.color,
                      borderRadius: 'inherit'
                  }}>

                      <div style={{
                          color: this.props._fontColor != undefined ? this.props._fontColor : '#fff',
                          display: 'flex',
                          flexFlow: 'column-reverse',
                          fontSize: this.props._fontSize != undefined ? this.props._fontSize : 14,
                          fontWeight: 'bold',
                          height: 'inherit',
                          justifyContent: 'center',
                          alignItems: 'center'
                      }}>{val.status}</div>

                  </div>

              ):  <div style={{
                    height: 'inherit',
                    width: this.props._progressValue != undefined ? this.props._progressValue : '10%',
                    backgroundColor: this.props._barBackgroundColor != undefined ? this.props._barBackgroundColor : 'green',
                    borderRadius: 'inherit'
                }}>

                    <div style={{
                        color: this.props._fontColor != undefined ? this.props._fontColor : '#fff',
                        display: 'flex',
                        flexFlow: 'column-reverse',
                        fontSize: this.props._fontSize != undefined ? this.props._fontSize : 14,
                        fontWeight: 'bold',
                        height: 'inherit',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>{this.props.Status != undefined ? this.props.Status : ''}</div>

                </div> }
            </div>
        );
    }
}
