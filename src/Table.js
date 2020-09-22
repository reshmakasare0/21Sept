import React from 'react';
import {tsQualifiedName} from "@babel/types";
import ProgressBar from './ProgressBar'
import LoginPage from "./loginPage";
const records=[
    {
        status: 'active',
        reading: '20%',
        color:'#c6cc26',
    },
    {
        status: 'cold',
        reading: '40%',
        color:'#3ECC1E',
    },
    {
        status: 'warm',
        reading: '60%',
        color:'#1887CC',
    },
    {
        status: 'engaging',
        reading: '100%',
        color:'#CC362E',
    }
]


class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item:[],
            isLoad:false,
            _progressValue:'',
            _barBackgroundColor:"",
            dataList:[],
        }
    }
    componentDidMount() {

    }

    _sendGraphData(_records) {
        let temp = this.state.dataList;
        let isAdded = false;
        if(temp.length > 0){
           for(let i=0; i<Object.keys(temp).length;i++){
               if(temp[i].status !== _records.status){
                   isAdded = true;
               } else {
                   isAdded = false;
               }
           }
           if(isAdded){
               temp.push(_records);
           }
        } else {
            temp.push(_records);
        }
        this.setState({dataList: temp}) ;
        console.log(this.state.dataList); //this records push into dataList array please do
    }

    render() {

            return (
                <div className="App">
                   <ProgressBar {...this.props}
                                 _height={50}
                                 _fontSize={12}
                                 _progressValue={this.state._progressValue}
                                _dataList={this.state.dataList}
                                  Status={this.state.Status}
                                 _barBackgroundColor={this.state._barBackgroundColor}
                    />


                    <b>Table Data</b>
                        <table>
                            <thead style={{backgroundColor:"steelblue" ,height:100}}>
                            <tr  className="row">
                                <th  className="col-sm-2">Status</th>
                                {/*<th  className="col-sm-2">Employee_name</th>
                                <th  className="col-sm-2">Emp_salary</th>
                                <th  className="col-sm-2">Emp_age</th>
                                <th  className="col-sm-2">Profile image</th>*/}
                            </tr>
                            </thead>
                            { records.map((value, index) =>
                                <tbody>
                                <tr className="row">
                                    <th  className="col-sm-2" style={{color:"black"}}
                                   /* onClick={()=>this.setState({_progressValue:  value.reading ,
                                        _barBackgroundColor:value.color,
                                        Status:value.status
                                    })}*/
                                        onClick={()=>{this._sendGraphData(value)}}
                                    >{value.status}</th>
                                 {/*   <th  className="col-sm-2"  style={{color:"black"}}>{records.employee_name}</th>
                                    <th  className="col-sm-2"  style={{color:"black"}}>{records.employee_salary}</th>
                                    <th className="col-sm-2"  style={{color:"black"}}>{records.employee_age}</th>
                                    <th className="col-sm-2"  style={{color:"black"}}>{records.profile_image}</th>*/}
                                </tr>

                                </tbody>
                            ) }


                        </table>
                </div>
            );
        }

}

export default Table;
