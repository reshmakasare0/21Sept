import React from 'react';

class last extends React.Component{

    constructor(){

        super();


            this.state = {name: "", salary: ""}

    }

    handleChange = event =>{

        this.setState({ [event.target.name]:event.target.value })

    }

    handleSubmit = event =>{

        event.preventDefault();

        console.log("User name :"  + this.state.name)

        console.log("User salary :" + this.state.salary)

        const url ='http://dummy.restapiexample.com/create'

            const data = { name:this.state.name, email:this.state.email }

        fetch(url, { method: 'POST', // or ‘PUT’

        body: JSON.stringify(data), // data can be `string` or {object}!

            headers:{ 'Content-Type': 'application/json' } })

    .then(res => res.json())

            .catch(error => console.error('Error:', error))

    .then(response => console.log('Success:', response)); }

    render(){

        return(
<div>
            <form onSubmit={this.handleSubmit}>

                <input type="text" name="name" onChange={this.handleChange} />

        <input type="text" name="salary" onChange={this.handleChange} />
                <input type="number" name="email" onChange={this.handleChange} />


                <input type="submit" value="Add User" /> </form> )
</div>
        );
    }

}
export default last;