import React from 'react';
import './App.css';


class Task extends React.Component{

    constructor(props){
        super(props);
        this.state={
            tname:"",
            ttype:"",
            assignto:"",
            pno:"",
            date:"",
            email:"",
            cperson:"",
            cdate:"",
            f1:"",
            f2:"",
            priority:"",
            note:"",
            s:false,
            ptname:"",
            stname:"",
            sttype:"",
            sassignto:"",
            sdate:"",
            spriority:"",
            snote:"",
            show:false,
            subtabel:false,
            main:true,
            table:false,
            table1:false,
            tableData:[]


        }

        }

    Validation() {



            if (this.state.tname.trim().length == 0) {

                alert("Please Enter Task Name")

            } else if (this.state.ttype.trim().length == 0) {


                alert("Please Enter Task Type")
            } else if (this.state.pno.trim().length == 0) {

                if (this.state.pno == "") {
                    alert("invalid phone no")
                } else {
                    alert("Please Enter Contact No")
                }

            } else if (this.state.email.trim().length == 0) {


                alert("Please Enter Email ID")
            } else if (this.state.assignto == 0) {


                alert("Assign To")
            } else if (this.state.ttype == 0) {


                alert("Select Task Type")
            } else if (this.state.cperson == 0) {


                alert("Select Contact Person")
            } else if (this.state.f1 == 0) {


                alert("Select Follower 1")
            } else if (this.state.f2 == 0) {


                alert("Select Follower 2")
            } else if (this.state.priority == 0) {


                alert("Set Priority")
            } else if (this.state.s == true) {
                if (this.state.sassignto == 0) {


                    alert("Assign To")
                } else if (this.state.sttype == 0) {


                    alert("Select Task Type")
                } else if (this.state.spriority == 0) {


                    alert("Set Priority")
                } else if (this.state.stname.trim().length == 0) {

                    alert("Please Enter Task Name")

                } else if (this.state.snote.trim().length == 0) {

                    alert("Write Note")

                } else if (this.state.sdate.length != 10) {

                    alert("Select Date")

                }


            } else if (this.state.date.length != 10) {

                alert("Select Date")

            } else if (this.state.cdate.length != 10) {

                alert("Please Create Date")

            }
            else if(this.state.s==false)
                {
                   alert("Please create Sub Task")
                }

            else {


                let obj = {
                    Tname: this.state.tname,
                    T_Type: this.state.ttype,
                    Assign_To: this.state.assignto,
                    Phone_No: this.state.pno,
                    Date: this.state.date,
                    Email_ID: this.state.email,
                    Contact_Person: this.state.cperson,
                    Create_Date: this.state.cdate,
                    Follower_1: this.state.f1,
                    Follower_2: this.state.f2,
                    Priority: this.state.priority,
                    Note: this.state.note,



                    Parent_Task: this.state.tname,
                    STask: this.state.stname,
                    STaskType: this.state.sttype,
                    SAssignTo: this.state.sassignto,
                    SDate: this.state.sdate,
                    SPriority: this.state.spriority,
                    SNote: this.state.snote,
                }
                let temp = this.state.tableData
                temp.push(obj)
                this.setState({tableData: temp})

            }

        }

            render() {
      const {s}=this.state;
                const {show}=this.state;
                const {subtable}=this.state;
                const {main}=this.state;
                const {table1}=this.state;


                return (
       <div style={{backgroundColor:"gainsboro"}}>
           <center>

               {main ?
                   <div>

                   <div style={{height:60,backgroundColor:"darkcyan"}}><h1 className={"font1"}>Create Main Record</h1><br/></div>
                       <br/>
               <div className={"row"}>
                    <div className="col-md-4 col-sm-4">

                        <font className={"font"}><h4>Task Name:</h4></font><input type={"text"} className={"size"} placeholder="Task Name" value={this.state.tname} onChange={(event) => this.setState({tname: event.target.value})}/></div>



                    <div className="col-md-4 col-sm-4">

                        <font className={"font"}><h4>Task Type:</h4></font>

                        <select value={this.state.ttype} className={"size"} onChange={(event) => this.setState({ttype: event.target.value})}>
                            <option>Task Type</option>

                            <option>Type 1</option>
                            <option>Type 2</option>
                            <option>Type 3</option>
                            <option >type 4</option>                      </select>
                    </div>




                    <div className="col-md-4 col-sm-4">

                        <font className={"font"}><h4>Assign To:</h4></font>

                        <select value={this.state.assignto}  className={"size"}    onChange={(event) => this.setState({assignto: event.target.value})}>
                            <option>Assign To</option>

                            <option>Reshma</option>
                            <option>Subhangi</option>
                            <option>Abhijit</option>
                            <option >Piya</option>
                        </select>
                    </div></div>

                    <div className={"row"}>

                    <div className="col-md-4 col-sm-4">

                        <font className={"font"}><h4>Phone No:</h4></font>

                        <input type={"number"} className={"size"} placeholder="Phone No" value={this.state.pno}
                               onChange={(event) => this.setState({pno: event.target.value})}

                        /></div>

                    <div className="col-md-4 col-sm-4">

                        <font className={"font"}><h4>Due Date:</h4></font>
                        <input type={"date"} className={"size"}
                            value={this.state.date}
                               onChange={(event) => this.setState({date: event.target.value})}/>
                    </div>


                    <div className="col-md-4 col-sm-4">

                        <font className={"font"}><h4>Email:</h4></font>

                        <input type={"text"} className={"size"} placeholder="Email" value={this.state.email}
                               onChange={(event) => this.setState({email: event.target.value})}

                        /></div>
                        </div><br/><br/>


                <div className={"row"}>
                    <div className="col-md-4 col-sm-4">

                        <font className={"font"}><h4>Contact Person:</h4></font>

                        <select value={this.state.cperson} className={"size"}  onChange={(event) => this.setState({cperson: event.target.value})}>
                            <option>Contact Person</option>

                            <option>Reshma</option>
                            <option>Subhangi</option>
                            <option>Abhijit</option>
                            <option >Piya</option>
                        </select>
                    </div>
                    <div className="col-md-4 col-sm-4">

                        <font className={"font"}><h4>Create Date:</h4></font>
                        <input type={"date"} className={"size"}  value={this.state.cdate}
                               onChange={(event) => this.setState({cdate: event.target.value})}/>
                    </div>


                    <div className="col-md-4 col-sm-4">

                        <font className={"font"}><h4>Followers 1:</h4></font>

                        <select value={this.state.f1} className={"size"} onChange={(event) => this.setState({f1: event.target.value})}>
                            <option>SelectFollower1</option>

                            <option>Tejal</option>
                            <option>Reshma</option>
                            <option>Piya</option>
                            <option >Shubhangi</option>

                        </select>
                    </div></div>
               <br/><br/>

               <div className={"row"}>
                    <div className="col-md-4 col-sm-4">

                        <font className={"font"}><h4>Priority:</h4></font>

                        <select value={this.state.priority} className={"size"} onChange={(event) => this.setState({priority: event.target.value})}>
                            <option>Set Priority</option>

                            <option>0</option>
                            <option>1</option>
                            <option>max</option>
                            <option >min</option>
                        </select>
                    </div>


                    <div className="col-md-4 col-sm-4">

                        <font className={"font"}><h4>Followers 2:</h4></font>

                        <select value={this.state.f2} className={"size"}  onChange={(event) => this.setState({f2: event.target.value})}>
                            <option> Select Follower 2</option>

                            <option>Tejal</option>
                            <option>Reshma</option>
                            <option>Piya</option>
                            <option >Shubhangi</option>
                        </select>
                    </div>

                    <div className="col-md-4 col-sm-4">

                    <font className={"font"}><h4>Note:</h4></font>

                    <input type={"text"} className={"size"} placeholder="Write Note" value={this.state.note}
                           onChange={(event) => this.setState({note: event.target.value})}
                    /></div></div><br/><br/>

<br/><br/>
                <div className={"row"}>
                    <div className="col-md-4 col-sm-4">
                        <button className={"button1"}><label className={"label"}onClick={()=>{this.Validation()
                            this.setState({tname:"", ttype:"", assignto:"",
                            pno:"", date:"", email:"", cperson:"", cdate:"", f1:"", f2:"", priority:"", note:"",show:true,main:false})}}>Save</label>
                        </button>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <button className={"button1"}><label className={"label"}onClick={()=>{this.setState({  tname:"", ttype:"", assignto:"",
                            pno:"", date:"", email:"", cperson:"", cdate:"", f1:"", f2:"",show:false, priority:"", note:"", s:false,subtable:false})}} >Clear</label>
                        </button>                    </div>
                    <div className="col-md-4 col-sm-4">
                        <button className={"button1"} onClick={()=>{this.setState({s:true,show:false,main:false})}}><label className={"label"}>Subtask</label>
                        </button>
                    </div>
                </div><br/><br/></div>
                   :null
               }


{show ?
    <div>

    <div style={{height:70}}><h1 className={"font"}> Main Record</h1></div>

        <br/><br/>
        <font color="white">
               <table>
                   <thead className={"row"}
                          font="white">
                   <tr style={{height:40}} className={"tbl"}>

                   <th className="col-sm-1" >Tname</th>
                       <th className="col-sm-1">T_Type</th>
                           <th className="col-sm-1">Assign_To</th>
                               <th  className="col-sm-1">Phone_No</th>
                                   <th className="col-sm-1"> Date</th>
                                       <th className="col-sm-1">Email_ID</th>
                                           <th className="col-sm-1">Contact_Person</th>
                                               <th className="col-sm-1"> Create_Date</th>
                                                   <th className="col-sm-1"> Follower_1</th>
                                                       <th className="col-sm-1"> Follower_2</th>
                                                           <th className="col-sm-1"> Priority</th>
                       <th width="150px"> Note</th></tr>

                   </thead>
                   <tbody className="row">
                   {this.state.tableData.map((records,index)=>
                       <tr style={{height:40}}>

                           <td className="col-sm-1" style={{color:"black"}}>{records.Tname}</td>
                           <td className="col-sm-1" style={{color:"black"}}>{records.T_Type}</td>
                           <td className="col-sm-1" style={{color:"black"}}>{records.Assign_To}</td>
                           <td className="col-sm-1" style={{color:"black"}}>{records.Phone_No}</td>
                           <td className="col-sm-1" style={{color:"black"}}>{records.Date}</td>
                           <td className="col-sm-1" style={{color:"black"}}>{records.Email_ID}</td>
                           <td className="col-sm-1" style={{color:"black"}}>{records.Contact_Person}</td>
                           <td className="col-sm-1" style={{color:"black"}}>{records.Create_Date}</td>
                           <td className="col-sm-1" style={{color:"black"}}>{records.Follower_1}</td>
                           <td className="col-sm-1" style={{color:"black"}}>{records.Follower_2}</td>
                           <td className="col-sm-1" style={{color:"black"}}>{records.Priority}</td>
                           <td className="col-sm-1" style={{color:"black"}}>{records.Note}</td>
                       </tr>
                   )}
                   </tbody>
               </table>
        </font>

        <br/><br/>

                <button className={"button1"}><label className={"label"} onClick={()=>{this.setState({show:false,table1:true})}}>Sub Task</label></button>&#160;&#160;
                <button className={"button1"}><label className={"label"} onClick={()=>{this.setState({main:true,s:false,show:false})}}>New</label></button>



</div>



        :
   null

}

               {table1 ?
<div><br/><br/>
    <div style={{height:70}}><h1><label className={"font"}>Sub Task Record</label></h1></div>

                       <br/>
    <font color="white">
                       <table>
                           <thead className="row"
                                  >
                           <tr style={{height:40}} className="tbl">

                               <th className="col-sm-1">Parent_Task</th>
                               <th className="col-sm-1">S_Task</th>
                               <th className="col-sm-1"> S_Task_Type</th>
                               <th className="col-sm-1"> S_Assign_To</th>
                               <th className="col-sm-1"> S_Date</th>
                               <th className="col-sm-1">S_Priority</th>
                               <th className="col-sm-1"> S_Note</th>
                           </tr>
                           </thead><tbody className="row">
                           {this.state.tableData.map((records, index) =>
                               <tr>

                                   <td className="col-sm-1" style={{color:"black"}}>{records.Parent_Task}</td>
                                   <td className="col-sm-1" style={{color:"black"}}>{records.STask}</td>
                                   <td className="col-sm-1" style={{color:"black"}}>{records.STaskType}</td>
                                   <td className="col-sm-1" style={{color:"black"}}>{records.SAssignTo}</td>
                                   <td className="col-sm-1" style={{color:"black"}}>{records.SDate}</td>
                                   <td className="col-sm-1" style={{color:"black"}}>{records.SPriority}</td>
                                   <td className="col-sm-1" style={{color:"black"}}>{records.SNote}</td>
                               </tr>
                           )}
                       </tbody>
                       </table>
    </font>
                       <br/><br/>

                               <button className={"button1"}><label className={"label"} onClick={()=>{this.setState({show:true,table1:false})}}>Main Record</label></button>&#160;&#160;
    <button className={"button1"}><label className={"label"} onClick={()=>{this.setState({main:true,table1:false})}}>New</label></button>

                       </div>


                   : null
               }


               {s ?
<div>
                   <div style={{height:70,backgroundColor:"darkcyan"}}><h1 className={"font1"}>Create Sub Record</h1></div>

                       <br/><br/>

                        <div className={"row"}>

                            <div className="col-md-4 col-sm-4">

                            <font className={"font"}><h4>Parent Task Name:</h4></font>

                            <input type={"text"} className={"size"} value={this.state.tname}

                            /></div></div>
                        <br/><br/>

                    <div className={"row"}>

                                <div className="col-md-4 col-sm-4">


                                <font className={"font"}><h4>Task Name:</h4></font>

                        <input type={"text"} placeholder="Task Name" className={"size"} value={this.state.stname}
                               onChange={(event) => this.setState({stname: event.target.value})}/><br/><br/>

                                </div>

                            <div className="col-md-4 col-sm-4">


                            <font className={"font"}><h4>Task Type:</h4></font>

                        <select value={this.state.sttype} className={"size"} onChange={(event) => this.setState({sttype: event.target.value})}>
                            <option>Task Type</option>

                            <option>Type 1</option>
                            <option>Type 2</option>
                            <option>Type 3</option>
                            <option >type 4</option>
                        </select><br/><br/></div>

                        <div className="col-md-4 col-sm-4">

                                <font className={"font"}><h4>Assign To:</h4></font>

                        <select value={this.state.sassignto} className={"size"} onChange={(event) => this.setState({sassignto: event.target.value})}>
                            <option>Assign To</option>

                            <option>Tejal</option>

                            <option>Reshma</option>
                            <option>Subhangi</option>
                            <option>Abhijit</option>
                            <option >Piya</option>
                        </select>
                        </div></div>
                        <br/><br/>

                        <div className={"row"}>

                            <div className="col-md-4 col-sm-4">

                        <font className={"font"}><h4>Due Date:</h4></font>
                        <input type={"date"} className={"size"}  value={this.state.sdate}
                               onChange={(event) => this.setState({sdate: event.target.value})}/><br/><br/></div>


                        <div className="col-md-4 col-sm-4">


                                <font className={"font"}><h4>Priority:</h4></font>

                        <select value={this.state.spriority} className={"size"}  onChange={(event) => this.setState({spriority: event.target.value})}>
                            <option>Set Priority</option>

                            <option>0</option>
                            <option>1</option>
                            <option>max</option>
                            <option >min</option>
                        </select>
                                </div>
                            <div className="col-md-4 col-sm-4">

                            <font className={"font"}><h4>Note:</h4></font>

                        <input type={"text"} className={"size"} placeholder="Write Note" value={this.state.snote}
                               onChange={(event) => this.setState({snote: event.target.value})}/>
                        </div></div>
<br/><br/>
                            <div className={"row"}>
                        <div className="col-md-4 col-sm-4">


                        <button className={"button1"}><label className={"label"}
                                                             onClick={()=>{this.Validation()
                                                                 this.setState({subtable:false,table1:true,s:false})}}>Save</label></button></div>

                    <div className="col-md-4 col-sm-4">
                        <button className={"button1"}><label className={"label"}
                                                             onClick={()=>{this.setState({  stname:"", sttype:"", sassignto:"", cperson:"", ssdate:"", spriority:"", snote:"", subtable:false,table1:false})}} >Clear</label>
                    </button>                    </div>
                                <div className="col-md-4 col-sm-4">

                                <button className={"button1"}><label className={"label"}onClick={()=>{this.Validation()
                                    this.setState({tname:"", ttype:"", assignto:"",
                                        pno:"", date:"", email:"", cperson:"", cdate:"", f1:"", f2:"", priority:"", note:"",show:true,s:false})}}>Main Task</label>
                                </button>

                                </div>
                            </div>

                    </div>
                :null

                }

<br/><br/>

               {subtable ?


                   <div>

                       <div className={"row"}>
                           <div className="col-md-4 col-sm-4">


                               <button className={"button1"}><label className={"label"} onClick={()=>{this.setState({show:false})}}>Main Record</label></button>
                           </div>

                           <div className="col-md-4 col-sm-4">
                               <button className={"button1"}><label className={"label"}onClick={()=>{this.setState({  tname:"", ttype:"", assignto:"",
                                   pno:"", date:"", email:"", cperson:"", cdate:"", f1:"", f2:"", priority:"", note:"", s:false,subtable:false,table1:true,show:false})}} >Sub Record</label>
                               </button>
                               </div></div>




<br/><br/><br/>

                   </div>

                   :null
        }

            </center>    </div>
        );
    }
}
export default Task;