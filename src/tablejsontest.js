import React from "react";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
//import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const products = [
    {
        id: 1,
        name: 'ghh',
        price: [
            {
                data: 'hhhh',
                atff: 'hhj'
            }
        ],
    }

]

class Tablejsontestest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            priceList: []
        }
    }

    moredetails(records) {
        console.log(records);
        this.setState({
            priceList: records.price
        })
    }

    render() {
        const options = {
            onRowClick: this.moredetails.bind(this)
        }
        return (
            <div>
                <BootstrapTable data={products} options={options}>

                    <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>

                    <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>

                    <TableHeaderColumn dataField='price.data'>Product Price</TableHeaderColumn>

                </BootstrapTable>


                <BootstrapTable data={this.state.priceList}>


                    <TableHeaderColumn isKey={true} dataField='data'>Product Name</TableHeaderColumn>

                    <TableHeaderColumn dataField='atff'>Product Price</TableHeaderColumn>

                </BootstrapTable>
            </div>
        )
    }

}

export default Tablejsontestest; //thik hai