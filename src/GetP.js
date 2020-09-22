import React from 'react';
import {tsQualifiedName} from "@babel/types";

class GetP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            salary:"",
            age:"",
            id:"",
            item:[],
            isLoad:true
        }
    }


validation(){

    var allOk=true

    if (this.state.name ==undefined || this.state.name == null)
    {
        allOk=false

        alert("name is Empty!!!")

    }else
    if(this.state.salary ==undefined || this.state.salary ==null)
    {
        allOk=false

        alert("salary is Empty!!!")

    }else
    if(this.state.age ==undefined || this.state.age ==null)
    {
        allOk=false

        alert("age is Empty!!!")

    }else
    if(this.state.id ==undefined || this.state.id ==null)
    {
        allOk=false

        alert("id is Empty!!!")

    }
    else  if(allOk)
    {
    /*    fetch('http://dummy.restapiexample.com/create',
            {method:'POST'})

        body: JSON.stringify({
            "name":this.state.name,
            "salary":this.state.salary,
            "age":this.state.age
        })
            .then(res=>res.json())
            .then(json=>{
                this.setState({
                    isLoad:true,
                    item:json
                })
            });
*/


    }

    }
    //return <h1>Please Login</h1>;

    request()
    {



      /*  .post('http://dummy.restapiexample.com/create')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                name: this.state.name,
                salary: "password"
            })
            .end(function (err, res) {
                console.log(res.text);
            }); */

        fetch('http://dummy.restapiexample.com/create',
            {method:'POST'})

        body: JSON.stringify({
            "name":this.state.name,
            "salary":this.state.salary,
            "age":this.state.age
        })
            .then(res=>res.json())
            .then(json=>{
                this.setState({
                    isLoad:true,
                    item:json
                })
            });
    }
componentDidMount() {
        this.request()
}


    render() {
        var {isLoad, item} = this.state;
        if (!isLoad) {
            return (
                <div><b>Loading.....</b></div>
            );
        } else {
            return (
                <div className="App">
                    <div className="row">
                        <div className="col-sm-3">
                            <b>    Name: </b>    <input type={"text"}
                             value={this.state.name} placeholder="name" onChange={(event)=>
                            this.setState({name:event.target.value})}/>
                        </div>
                        <div className="col-sm-3">

                            <b>  salary:  </b>   <input type={"text"} placeholder="salary"
                                                       value={this.state.salary} onChange={(event)=>
                            this.setState({salary:event.target.value})}/>
                        </div>
                        <div className="col-sm-3">

                            <b>   Age:  </b>   <input type={"text"} placeholder="Age"
                                          value={this.state.age}
                                                      onChange={(event)=>
                            this.setState({age:event.target.value})}/>
                        </div>
                        <div className="col-sm-3">

           *                 <b>Id:  </b>   <input type={"text"} placeholder="id"
                                                  value={this.state.id}
                                                  onChange={(event)=>
                                                                this.setState({id:event.target.value})}/>
                                                      </div>
<br/><br/>
                    <button type="submit" onClick={()=>this.validation()}>submit</button>
                    </div>


                </div>
            );
        }
    }
}

export default GetP;
