import React from 'react';
import {tsQualifiedName} from "@babel/types";

class Apii extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
item:[],
            isLoad:false
        }
    }
componentDidMount() {
        fetch('http://dummy.restapiexample.com/api/v1/employees',{method:'POST'})
            .then(res=>res.json())
            .then(json=>{
this.setState({
    isLoad:true,
    item:json
})
            });
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
                    <b>Table Data</b>
<font color="white">
                    <table>
                        <thead style={{backgroundColor:"steelblue" ,height:100}}>
                        <tr  className="row">
                            <th  className="col-sm-2">ID</th>
                            <th  className="col-sm-2">Employee_name</th>
                            <th  className="col-sm-2">Emp_salary</th>
                            <th  className="col-sm-2">Emp_age</th>
                            <th  className="col-sm-2">Profile image</th>
                        </tr>
                        </thead>
                        { this.state.item.map((records, index) =>
                        <tbody>
                        <tr className="row">
                            <th  className="col-sm-2" style={{color:"black"}}>{records.id}</th>
                            <th  className="col-sm-2"  style={{color:"black"}}>{records.employee_name}</th>
                            <th  className="col-sm-2"  style={{color:"black"}}>{records.employee_salary}</th>
                            <th className="col-sm-2"  style={{color:"black"}}>{records.employee_age}</th>
                            <th className="col-sm-2"  style={{color:"black"}}>{records.profile_image}</th>
                        </tr>

                        </tbody>
                        ) }


                    </table></font>
                </div>
            );
        }
    }
}

export default Apii;
