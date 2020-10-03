import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddDepModal} from './AddDepModal';
import {EditDepModal} from './EditDepModal';


export class Products extends Component {

constructor(props){
    super(props)
        this.state={deps:[], addModalShow: false, editModalShow:false}
    
}
componentDidMount(){
    this.refreshlist();
}
refreshlist(){
    fetch('https://localhost:44374/api/Inventory')
    .then(response=> response.json())
    .then(data =>{
        this.setState({deps:data});
    })
}
componentDidUpdate(){
    this.refreshlist();
}

deleteDep(depid)
{
if(window.confirm('Are you sure ?'))
    {
fetch('https://localhost:44374/api/Inventory/'+depid,{
    method:'DELETE',
    header:{'Accept':'application/json',
            'Content-Type':'application/json'   
           }
        })
    }
}
handleOpenProduct = (dep)=>{
    localStorage.setItem("Detail",JSON.stringify(dep));
    this.props.history.push("/productdetails");
}

    render(){
        const {deps,depid,depname,depdesc,depprice} = this.state;
        let addModalClose =() => this.setState({addModalShow:false});
        let editModalClose =() => this.setState({editModalShow:false});
        
        return(
            <div>
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Item ID</th>
                        <th>Item Name</th>
                        
                        <th>Price</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {deps.map(dep=>
                        <tr key ={dep.ItemID}> 
                        <td>{dep.ItemID}</td>
                        <td onClick={()=>this.handleOpenProduct(dep)}>{dep.ItemName}</td>
                        

                        <td>{dep.Price}</td>

                        <td>
                            <ButtonToolbar>
                                <Button
                                className="mr-2" variant="info"
                                onClick={()=> this.setState({editModalShow:true,depid:dep.ItemID,depname:dep.ItemName,depdesc:dep.Description,depprice:dep.Price})}
                                >
                                    Edit
                                </Button>

                                <Button
                                className="mr-2"
                                onClick={()=> this.deleteDep(dep.ItemID)}
                                variant="danger"
                                >
                                    Delete
                                </Button>

                                <EditDepModal
                                show={this.state.editModalShow}
                                onHide={editModalClose}
                                depid={depid}
                                depname={depname}
                                depdesc={depdesc}
                                depprice={depprice}
                                
                                />
                            </ButtonToolbar>
                            
                                

                            

                        </td>
                        


                        
                        </tr>
                        )}
                </tbody>
            </Table>

            <ButtonToolbar>
                <Button variant='primary' onClick={()=> this.setState({addModalShow:true})}
                >Add Item</Button>

                <AddDepModal
                show={this.state.addModalShow}
                onHide={addModalClose}
                />
            </ButtonToolbar>
            </div>
        )
    }
}