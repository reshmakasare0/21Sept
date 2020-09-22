import React from 'react';
import './App.css';
class Bird extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fname:"",
            mname:"",
            lname:"",
            tableData: []


        }
    }

    Validation() {
        var check=false
        {
            if (this.state.fname.trim().length == 0 || this.state.fname == undefined || this.state.fname == null) {
                check=true

                alert("Please Enter First Name")
                // this.setState({set:false})

            } else if (this.state.mname.trim().length == 0 || this.state.mname == undefined || this.state.mname == null) {
                check=true


                alert("Please Enter Middle Name")
                // this.setState({set:false})
            }


            else if (this.state.lname.trim().length == 0 || this.state.lname == undefined || this.state.lname == null) {
                check=true

                alert("Please Enter Last Name")
                // this.setState({set:false})

            }
            else {
                let obj = {
                    Fname: this.state.fname,
                    Mname: this.state.mname,
                    Lname: this.state.lname
                }
                let temp = this.state.tableData
                temp.push(obj)
                this.setState({tableData: temp})
                }


            }



    }

    handleChange = (event, index, value) => this.setState({value});

    delete(records) {
        let temp = this.state.tableData
        let len = Object.keys(temp).length
        let tempFinal = temp

        for (let i = 0; i < len; i++) {
            if (temp[i].id === records) {
                temp.splice(i, 1)
                break
            }
        }
this.setState({tableData:temp})

    }



    render() {
        return(
            <div>


                <div className="row">
                    <div className="col-md-2 col-sm-2">

                        <font color="#00bfff"><h5>First Name:</h5></font>
                        <input type={"text"} placeholder="First name"
                               value={this.state.fname}
                               onChange={(event) => this.setState({fname: event.target.value})}

                        />
                    </div>
                    <div className="col-md-2 col-sm-2">

                        <font color="#00bfff"><h5>Middle Name:</h5></font>

                        <input type={"text"} placeholder="Middle name" value={this.state.mname}
                               onChange={(event) => this.setState({mname: event.target.value})}
                                                      />
                    </div>


                    <div className="col-md-2 col-sm-2">

                        <font color="#00bfff"><h5>Last Name:</h5></font>

                        <input type={"text"} placeholder="Last name" value={this.state.lname}
                               onChange={(event) => this.setState({lname: event.target.value})}

                        /></div>
                        <div className="col-md-2 col-sm-2">
                            <font color="#00bfff"><h5>Click To Submit:</h5></font>

                            <input type="submit" value={"Submit"} className={"button"}
                                   onClick={() =>  {this.Validation()
                                       this.setState({
                                           fname: "", mname: "", lname: ""
                                       });
                                   }}
                               />
                        </div>

                </div>









                <h1>Table Data</h1>
                <table border="2" height="50" width="550" cellPadding="10"
                       cellSpacing="10" bordercolor = "black">
                    <thead className="table"
                           font="white">
                    <tr align="center" padding="5">
                        <th >Sr no</th>
                        <th >First Name</th>
                        <th >Middle Name</th>

                        <th>Last name</th>
                        <th>Delete</th>

                        <th></th>
                    </tr></thead>
                    {this.state.tableData.map((records, index) =>
                        <tr>
                            <td>{index + 1}</td>

                            <td>{records.Fname}</td>
                            <td>{records.Mname}</td>
                            <td>{records.Lname}</td>
                            <td><input type={"submit"} value="Delete" onClick={()=> {this.delete(records.id)}}
                            /></td>

                        </tr>
                    )}
                </table>
            </div>
        );
    }


}
export default Bird;