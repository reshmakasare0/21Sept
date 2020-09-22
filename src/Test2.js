import React from 'react';
import './App.css';
class Test2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData:[],
            data: [


                {
                    Created_at: "2020-07",
                    title: 'tejal',
                    author: 'aaa',
                }, {
                    Created_at: "2020-08",
                    title: 'komal',
                    author: 'bbb',
                },
                {
                    Created_at: "2020-09",
                    title: 'gauri',
                    author: 'zzzz',
                },
            ]
        }
    }
    componentWillMount() {
       this.displatImage()
    }

    displatImage(){
        let temp=[]
        let temp1=[]
        let obj= {"1":"https:\/\/testphp.urdemo.net\/images\/download1.jpg",
            "2":"https:\/\/testphp.urdemo.net\/images\/download4.jpg",
            "3":"https:\/\/testphp.urdemo.net\/images\/download6.jpg",
            "4":"https:\/\/testphp.urdemo.net\/images\/rose-3192610_1920.png",
            "5":"https:\/\/testphp.urdemo.net\/images\/tree-5077020_1920.jpg",
            "6":"https:\/\/testphp.urdemo.net\/images\/IMG_20170629_100734.jpg",
            "7":"https:\/\/testphp.urdemo.net\/images\/IMG_20170629_113523.jpg",
            "8":"https:\/\/testphp.urdemo.net\/images\/IMG_20170629_112906.jpg",
            "9":"https:\/\/testphp.urdemo.net\/images\/IMG_20170629_115155.jpg"}
        temp.push(obj)
        for(let i=1; i<Object.keys(obj).length;i++) {
            let obj1={
                image:obj[i]
            }
            temp1.push(obj1)
            console.log('===>>'+JSON.stringify(temp1))
        }
            this.setState({tableData: temp1})

    }
 /*
   render() {
        //{console.log(JSON.stringify())}
        this.state.data.sort((a, b) => (a.title > b.title) ? 1 : -1)
        return (
            <div className={"div5"}>
                <div className={"row"}>
                    {this.state.data.map((records) =>
                        <div className="col-sm-4 col-lg-4 col-md-4">

                            <div>
                                <b>
                                </b>
                                <br/>
                                <center>

                                    <font size="5">
                                        <b>Title:-</b>&#160;{records.title}<br/>
                                        <b>Date :-</b>&#160;{records.Created_at}<br/>

                                        <b>Author:</b>&#160;{records.author}<br/>
                                        <br/>

                                        <br/></font>
                                    <br/><br/></center>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        );
    }
}
export default Test2;
*/
  render() {
    //   {console.log(JSON.stringify(this.state.tableData))}
       return (
           <div className={"div5"}>
               {this.state.tableData.map((item,index)=>

               <img
               src={item.image}
               width={'50%'}
               height={'50%'}
               alt={"new"}
               />
               )}
           </div>

       );
   }
}
export default Test2;
