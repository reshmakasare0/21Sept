import React from 'react';
const data=[{
    fName:'Aditya',
    lName: 'Kumar'
      },{
    fName:'Ak',
    lName: 'Test'
      },{
    fName:'AA',
    lName: 'Test'
      },{
    fName:'DDDD',
    lName: 'EEEE'
      },];
export default class TwoClass extends React.Component {
    constructor(props) {
        super(props);

        // Bind the this context to the handler function
     //   this.handler = this.handler.bind(this);

        // Set some state
        this.state = {

            fname:"",
            lname:"",
            tableData:[],
            isTable:false
        }
    }

    // This method will be sent to the child component
    handler()
    {
        if (this.state.fname.trim().length == 0 || this.state.fname == undefined || this.state.fname == null) {
            alert("Please Enter First Name")
        }
        else if (this.state.lname.trim().length == 0 || this.state.lname == undefined || this.state.lname == null) {
            alert("Please Enter Last Name")
        }
        else {
           // alert("Registration successFully!!!")
            let obj = {
                Fname: this.state.fname,
                Lname: this.state.lname,
            }
            let temp = this.state.tableData;
            temp.push(obj)
            this.setState({tableData: temp})
            console.log("Data Check ==>>>"+JSON.stringify(temp));

        }

    }
    componentWillMount() {

    }

    // Render the child component and set the action property with the handler as value
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.handler()
                    this.setState({lname: "", fname: ""})
                }
                }>Submit
                </button>

                <button onClick={()=>{this.setState({isTable: true})}
                }>New!!!</button>

                <button onClick={()=>{this.setState({isTable: false})}
                }>list!!!</button>
                {this.state.isTable ?
                    <div className="row">
                    <div className="col-md-2 col-sm-4">
                        <font color="#00bfff"><h5>First Name:</h5></font>
                        <input type={"text"} placeholder="First name"
                               value={this.state.fname}
                               onChange={(event) => this.setState({fname: event.target.value})}
                        />
                    </div>
                    <div className="col-md-2 col-sm-4">
                        <font color="#00bfff"><h5>Last Name:</h5></font>
                        <input type={"text"} placeholder="Middle name" value={this.state.lname}
                               onChange={(event) => this.setState({lname: event.target.value})}
                        />
                    </div>
                </div>
                    :<Child tableData={this.state.tableData}/>}

            </div>
        )
    }
    }

class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          //  tableData:[],
            isTable:true
        };
    }

    componentWillMount() {

      console.log("Data table ==>>>"+JSON.stringify(this.props.tableData));

        console.log("Data Check ==>>>"+JSON.stringify(data));
    }
render() {
    return (

        <div>
            <table >
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                </tr>
                </thead>
                {this.props.tableData.map((records) =>
                    <tr>
                        <td>{records.Fname}</td>
                        <td>{records.Lname}</td>

                    </tr>
                )}
            </table>

        </div>
    );
}
}