import React,{Component} from 'react';


export class ProductDetails extends Component {

constructor(props){
    super(props)
        this.state={deps:[], addModalShow: false, editModalShow:false}
    
}
componentDidMount(){
    
    var detail = localStorage.getItem("Detail")
    console.log("value of detail",detail);
    this.setState({
        deps:JSON.parse(detail)
    })
}

    render(){
        
        var detail = localStorage.getItem("Detail")
    console.log("value of detail",this.state.deps);
        return(
            <div>
                <h1>Product ID: {this.state.deps.ItemID}</h1>
                <br/>
                <h1>Product Name: {this.state.deps.ItemName}</h1>
                <br/>
                <h1>Description: {this.state.deps.Description}</h1>
                <br/>
                <h1>Price: {this.state.deps.Price}</h1>


            
            </div>
        )
    }
}