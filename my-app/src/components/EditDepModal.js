import React, {Component} from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export class EditDepModal extends Component{
    constructor(props){
        super(props);

        this.state = {snackbaropen: false, snackbarmsg: ''};
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    snackbarClose = (event) =>{
        this.setState({snackbaropen: false})
      };
      handleSubmit(event){
        event.preventDefault();

        fetch('https://localhost:44374/api/Inventory',{
          method:'PUT',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            ItemID:event.target.ItemID.value,
            ItemName:event.target.ItemName.value,
            Price:event.target.Price.value,
            Description:event.target.Description.value
          })
        })
        .then(res=>res.json())
        .then((result)=>
        {
          //alert(result);
          this.setState({snackbaropen: true,snackbarmsg:result});
        },
        (error)=>{
          //alert('Failed')
          this.setState({snackbaropen: true,snackbarmsg:'Failed'});
        }
        )
        
        
    }
    render(){
        return(
          <div className="container">

            <Snackbar
              anchorOrigin={{vertical:'bottom',horizontal:'center'}}
              open = {this.state.snackbaropen}
              autoHideDuration = {3000}
              onClose={this.snackbarClose}
              message = {<span id="message-id">{this.state.snackbarmsg}</span>}

              action={[
                <IconButton
                  key="close"
                  arial-label="close"
                  color="inherit"
                  onClick={this.snackbarClose}
                  >
                    x
                </IconButton>
              ]}
            />
            <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
            <Row>
                <Col sm={6}>
                    <Form onSubmit={this.handleSubmit}>

                    <Form.Group controlId="ItemtID">
                        <Form.Label>ItemID</Form.Label>
                        <Form.Control
                        type="text"
                        name="ItemID"
                        required
                        disabled
                        defaultValue = {this.props.depid}
                        placeholder="ItemID"
                        />
                    </Form.Group>

                    <Form.Group controlId="ItemName">
                        <Form.Label>ItemName</Form.Label>
                        <Form.Control
                        type="text"
                        name="ItemName"
                        required
                        defaultValue = {this.props.depname}
                        placeholder="ItemName"
                        />
                    </Form.Group>

                    <Form.Group controlId="Price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                        type="text"
                        name="Price"
                        required
                        defaultValue = {this.props.depprice}
                        placeholder="Price"
                        />
                    </Form.Group>

                    <Form.Group controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                        type="text"
                        name="Description"
                        required
                        defaultValue = {this.props.depdesc}
                        placeholder="Description"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Item
                        </Button>
                    </Form.Group>
                    </Form>
                </Col>
            </Row>
        
      </Modal.Body>
      <Modal.Footer>
          
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
        );
    }

}