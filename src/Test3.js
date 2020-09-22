import React from 'react';
import './App.css';
class Test3 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fname:"",
            email:"",
            lname:"",
            add:"",
            no:"",
            city:0,
            gender:"",
            g:false,
            tableData:[]
        }
    }
    Validation() {
        var check=false
        {
            if (this.state.fname.trim().length == 0 || this.state.fname == undefined || this.state.fname == null) {

                alert("Please Enter First Name")

            } else if (this.state.add.trim().length == 0 || this.state.add == undefined || this.state.add == null) {


                alert("Please Enter Address Name")
            } else if (this.state.lname.trim().length == 0 || this.state.lname == undefined || this.state.lname == null) {


                alert("Please Enter Last Name")


            } else if (this.state.no.trim().length == 0 || this.state.no == undefined || this.state.no == null) {


                alert("Please Enter Contact No")


            } else if (this.state.city == 0) {


                alert("Please Select City")


            } else if (this.state.g == false) {
                alert("Please Select gender")
            } else {
                let obj = {
                    Fname: this.state.fname,
                    Address: this.state.add,
                    Lname: this.state.lname,
                    ContactNo: this.state.no,
                    Gender: this.state.gender,
                    City: this.state.city,
                    Email: this.state.email
                }
                let temp = this.state.tableData
                temp.push(obj)
                this.setState({tableData: temp})
                //console.log("Data Check ==>>>"+JSON.stringify(tableData));

            }
        }
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
                        <font color="#00bfff"><h5>Last Name:</h5></font>
                        <input type={"text"} placeholder="Middle name" value={this.state.lname}
                               onChange={(event) => this.setState({lname: event.target.value})}
                        />
                    </div>
                    <div className="col-md-2 col-sm-2">
                        <font color="#00bfff"><h5>Email ID:</h5></font>
                        <input type={"text"} placeholder="Last name" value={this.state.email}
                               onChange={(event) => this.setState({email: event.target.value})}
                        /></div></div>
                    <div className="row">
                    <div className="col-md-2 col-sm-2">
                        <font color="#00bfff"><h5>Address:</h5></font>
                        <input type={"text"} placeholder="Last name" value={this.state.add}
                               onChange={(event) => this.setState({add: event.target.value})}
                        /></div>
                        <div className="col-md-2 col-sm-2">
                            <font color="#00bfff"><h5>Contact No:</h5></font>
                            <input type={"text"} placeholder="Last name" value={this.state.no}
                                   onChange={(event) => this.setState({no: event.target.value})}
                            /></div>
                        <div className="col-md-2 col-sm-2">
                            <font color="#00bfff"><h5>City:</h5></font>
                            <select value={this.state.city}  onChange={(event) => this.setState({city: event.target.value})}>
                                <option>Select City</option>
                                <option>Mumbai</option>
                                <option>Pune</option>
                                <option>Nashik</option>
                                <option >Kolkata</option>
                            </select>
                        </div>
                            <div className="col-md-2 col-sm-2">
                                <font color="#00bfff"><h5>Gender:</h5></font>
                            <input type="radio" name="sex" value="male" onChange={(event)=> this.setState({g:true,gender:event.target.value})}/>Male&#160;
                            <input type="radio" name="sex" value="female" onChange={(event)=> this.setState({g:true,gender:event.target.value})}/>Female<br/><h3/>
                            <br/>
                            </div>
                            </div>
<div className={"row"}>
                        <div className="col-md-2 col-sm-2">
                        <input type="submit" value={"Submit"} className={"button"}
                               onClick={() =>  {this.Validation()
                                   this.setState({
                                       fname: "", add: "", lname: "",no:"",city:"",email:"",g:false
                                   });
                               }}
                        />
                        </div>
    <div className="col-md-2 col-sm-2">
    <input type="submit" value={"Reset"} className={"button"}
           onClick={() => {
               this.setState({
                   fname: "", Add: "", lname: "",no:"",city:"",email:"",g:false
               })
           }}/>
    </div></div><br/><br/><br/>
                <table>
                    <thead className="table"
                           font="white">
                    <tr>
                        <th width='150px'>Firstname</th>
                        <th width='150px'>Last name</th>
                        <th width='150px'>Email ID</th>
                        <th width='150px'>Address</th>
                        <th width='150px'>Contact No</th>
                        <th width='150px'>City</th>
                        <th width='150px'>gender</th></tr>
                    </thead>
                    {this.state.tableData.map((records,index)=>
                        <tr>
                            <td>{records.Fname}</td>
                            <td>{records.Lname}</td>
                            <td>{records.Email}</td>

                            <td>{records.Address}</td>
                            <td>{records.ContactNo}</td>
                            <td>{records.City}</td>
                            <td>{records.Gender}</td>
                        </tr>
                    )}
                </table>
</div>
        );
    }


}
export default Test3;
