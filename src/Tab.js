import React from 'react';
import './App.css';

//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

/*import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';*/
class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            fname: "",
            mname: "",
            lname: "",
            errorfname: "",
            errormname: "",
            errorlname: "",
            showing: true,
            flag: false,
            tableData: []

        };
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

                if(!check){
                    this.setState({flag:true})
                }

                console.log("Object===>" + JSON.stringify(obj))
                console.log("Array===>" + JSON.stringify(temp))

            }


        }
    }




    handleChange = (event, index, value) => this.setState({value});


    render() {
        const {showing} = this.state;
        const {flag} = this.state;
        return (

            <div style={{padding: 20}}>



                {showing ?
                    <div>
                        <font color="red"><h1>**Fill The Form**</h1></font><br/><br/>

                        <div className="row">
                            <div className="col-md-2 col-sm-2">

                                <font color="#00bfff"><h5>First Name:</h5></font>
                            <input type={"text"} placeholder="First name"
                               value="First Name"
                               errorText={this.state.errorfname}

                               value={this.state.fname}
                               onChange={(event) => this.setState({fname: event.target.value,errorfname: "",})}
                        />
                            </div>
                            <div className="col-md-2 col-sm-2">

                                <font color="#00bfff"><h5>Middle Name:</h5></font>

                        <input type={"text"} placeholder="Middle name" value="Middle Name"
                               value={this.state.mname} errorText={this.state.errormname}
                               onChange={(event) => this.setState({mname: event.target.value, errormname: ""})}
                        />
                            </div>


                            <div className="col-md-2 col-sm-2">

                                <font color="#00bfff"><h5>Last Name:</h5></font>

                        <input type={"text"} placeholder="Last name" value="Last Name"
                               value={this.state.lname} errorText={this.state.errorlname}
                               onChange={(event) => this.setState({lname: event.target.value, errorlname: ""})}
                        />
                            </div>
                        </div>


                        <br/><br/>

                        <div className="row">
                            <div className="col-md-1 col-sm-1">


                            <input type="submit" value={"List"}  className={"button"}
                               onClick={() => {
                                   this.setState({
                                       showing:false,flag:false
                                   });
                               }}

                        /><br/>
                            </div>



                                <div className="col-md-1 col-sm-1">


                        <input type="submit" value={"Submit"} className={"button"}

                               onClick={() =>  {
                                   this.Validation()
                                   this.setState({
                                       fname: "", mname: "", lname: ""

                                   });
                               }}/>
<br/><br/>

                            {flag ?
                               <div> {this.Validation}

                                   <table border="2" height="50" width="550" cellPadding="10"
                                          cellSpacing="10" bordercolor = "black">
                                       <thead className="table"
                                              font="white">
                                       <tr align="center" padding="5">
                                           <th >Sr no</th>
                                           <th >First Name</th>
                                           <th >Middle Name</th>

                                           <th>Last name</th>
                                           <th></th>
                                       </tr>

                                       </thead>
                                       {this.state.tableData.map((records, index) =>
                                           <tr>
                                               <td>{index + 1}</td>

                                               <td>{records.Fname}</td>
                                               <td>{records.Mname}</td>
                                               <td>{records.Lname}</td>
                                           </tr>
                                       )}

                                   </table>


                               </div>
                                : null
                            }

                         <br/>
                                </div>

                                        <div className="col-md-1 col-sm-1">


                        <input type="submit" value={"Reset"}
                              onClick={() => {
                                   this.setState({
                                       fname: "", mname: "", lname: "",flag:false
                                   })
                               }}

                               className={"button"}/> <img className={"img"}></img><br/>
                                        </div></div>
                        <br/>
                    </div>


                    :
                    <div>

                        <font color="red"><h3>This is the List Of Data::</h3></font>


                        <br/><br/>

                        <div className="row">
                            <div className="col-md-1 col-sm-1">



                            <input type="submit" value={"New"} className={"button"}

                               onClick={() => {
                                   this.setState({
                                       showing:true
                                   });
                               }}


                        /><br/>
                            </div>


                                <div className="col-md-1 col-sm-1">

                        <table border="2" height="50" width="550" cellPadding="10"
                            cellSpacing="10" bordercolor = "black">
                        <thead className="table"
                               font="white">
                        <tr align="center" padding="5">
                            <th >Sr no</th>
                            <th >First Name</th>
                            <th >Middle Name</th>

                            <th>Last name</th>
                            <th></th>
                        </tr>

                        </thead>
                        {this.state.tableData.map((records, index) =>
                            <tr>
                                <td>{index + 1}</td>

                                <td>{records.Fname}</td>
                                <td>{records.Mname}</td>
                                <td>{records.Lname}</td>
                            </tr>
                        )}

                    </table>
                                </div>
                        </div>
                    </div>

                }

    </div>
    )
        ;
    }
}

export default Tab;
