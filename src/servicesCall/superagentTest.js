import React from "react";
import superagent from 'superagent';

class SupersgentTest extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dataList: null
        }
    }

    getServiceCall() {
        // Post ki service hai
        // to hm data parameter iske body me send karte hai
        // Agar get ki service hoti hai to parameter url ke sath send karte hai
        let req = {
            title: 'foo',
            body: 'bar',
            userId: 1
        };
        const Url = "https://jsonplaceholder.typicode.com/posts";
// callback
        superagent
            .post(Url)
            .send(req) // sends a JSON post body
            .set('X-API-Key', 'foobar')
            .set('accept', 'json')
            .end((err, res) => {
                //Because main json res hai and then useme wo sab keys value the and us keys me body ke andar apna data hai
                // to res.body
                let data = res.body;
                this.setState({
                    dataList: data
                })
                console.log(JSON.stringify(data));
                console.log(res.body);
                console.log(err);
                // Calling the end function will send the request
            });

    }

        render() {
            return (
                <div>
              <h1>Welcome RA</h1>
                <button onClick={()=>this.getServiceCall()}>hhhhhh</button>
                    <text>{this.state.dataList != null ? this.state.dataList.body : 'No Data'}</text>
                </div>
            )

        }
}
export default SupersgentTest;