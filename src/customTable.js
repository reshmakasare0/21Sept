import React,{PureComponent} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './App.css';
const jobs = [
    {
    id: 1,
    name: "reshma",
    type: 'test',
    datetime: '10/10/1999',
    price3: 23,
    price4: 4,
    price5: 0,
    price6: 6,
    price7: 0,
    price8: 0,
}, {
    id: 2,
    name: "tejal",
    type: 'B',
    datetime: 0,
    price3: 0,
    price4: 0,
    price5: 2,
    price6: 0,
    price7: 34,
    price8: 52,
}];
const jobTypes = [ 'A', 'B', 'C', 'D' ];
const cellEditProp = {
    mode: 'click',
    blurToSave: true
};

export default class CustomTable extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            currSortColumnIdx: null
        };
        this.tdClassName=this.tdClassName.bind(this);
    }

    tdClassName = (fieldValue, row, rowIdx, colIdx) => {
        console.log(JSON.stringify(row));
        console.log(JSON.stringify(fieldValue));

        if (fieldValue >0) {
            return 'my-custom-class';
        }
        return null;
    };

    render(){


        return(
            <div>
                <BootstrapTable data={ jobs } cellEdit={ cellEditProp }>
                    <TableHeaderColumn dataField='id' isKey={ true }>Job ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' editable={ { type: 'textarea' } }>Job Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='type' editable={ { type: 'select', options: { values: jobTypes } } }>Job Type</TableHeaderColumn>
                    <TableHeaderColumn dataField='active' editable={ { type: 'checkbox', options: { values: 'Y:N' } } }>Active</TableHeaderColumn>
                    <TableHeaderColumn dataField='datetime' editable={ { type: 'datetime' } }>Date Time</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

