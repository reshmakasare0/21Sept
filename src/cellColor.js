import React,{PureComponent} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './App.css';
const products = [{
    id: 1,
    name: "A",
    price: 120,
    price2: 0,
    price3: 23,
    price4: 4,
    price5: 0,
    price6: 6,
    price7: 0,
    price8: 0,
}, {
    id: 2,
    name: "B",
    price: 80,
    price2: 0,
    price3: 0,
    price4: 0,
    price5: 2,
    price6: 0,
    price7: 34,
    price8: 52,
}];

export default class TableCell extends PureComponent{
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
                <BootstrapTable data={products} version='4'>
                    <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='price' columnClassName={ this.tdClassName }>Price</TableHeaderColumn>
                    <TableHeaderColumn dataField='price2' columnClassName={ this.tdClassName }>Price2</TableHeaderColumn>
                    <TableHeaderColumn dataField='price3' columnClassName={ this.tdClassName }>Price3</TableHeaderColumn>
                    <TableHeaderColumn dataField='price4' columnClassName={ this.tdClassName }>Price4</TableHeaderColumn>
                    <TableHeaderColumn dataField='price5' columnClassName={ this.tdClassName }>Price5</TableHeaderColumn>
                    <TableHeaderColumn dataField='price6' columnClassName={ this.tdClassName }>Price6</TableHeaderColumn>
                    <TableHeaderColumn dataField='price7' columnClassName={ this.tdClassName }>Price7</TableHeaderColumn>
                    <TableHeaderColumn dataField='price8' columnClassName={ this.tdClassName }>Price8</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

