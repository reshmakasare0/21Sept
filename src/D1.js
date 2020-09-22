import React from 'react';
import './App.css';


class D1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false
        }
    }


    componentDidMount() {
        fetch('http://dummy.restapiexample.com/api/v1/employees', {method: "POST",

        })
        /*

        .then(res => {
            console.log('RES', res.json())
            res.json()
        })
        .then(json => {
            this.setState({data: json, loaded: true})
            console.log(json)

        });
}
*/
.then(response => {
        response.ok ?
            response.json().then(json => { console.log(json)
            this.setState({loaded:true,data:json})


            })

            :
            console.log(response)
    })
}


    render() {
        var {loaded, data} = this.state;
        return (

            <div>

                    <div>
                        <h4>Table Data</h4>


                        <table>
                            <thead >
                            <tr className={"row"} style={{backgroundColor:'orange',height:50}}>
                                <th className="col-sm-2">Id</th>
                                <th className="col-sm-2">employee_name</th>
                                <th className="col-sm-2">employee_salary</th>
                                <th className="col-sm-2">employee_age</th>
                                <th className="col-sm-2">profile_image</th>
                            </tr>

                            </thead>
                            {this.state.data.map((records, index) =>
                                <tr className={"row"}>

                                    <td className="col-sm-2">{records.id}</td>
                                    <td className="col-sm-2">{records.employee_name}</td>
                                    <td className="col-sm-2">{records.employee_salary}</td>

                                    <td className="col-sm-2">{records.employee_age}</td>
                                    <td className="col-sm-2">{records.profile_image}</td>


                                </tr>
                            )}

                        </table>


                    </div>





            </div>
        );
    }
}

export default D1;
