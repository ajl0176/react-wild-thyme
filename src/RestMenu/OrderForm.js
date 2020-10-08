import React, { Component }from 'react';





class OrderForm extends Component {
constructor(props) {
  super(props);
  this.state={
    }
  }

  render() {
const subtotal = this.props.order.reduce((acc, item)=> {
  let total = acc + item.price
    return total
  }, 0);

  let orderList = this.props.order.map((item, index)=> (


        <div className="d-flex justify-content-between items" key={index}>
            <h5>{item.item}</h5>
            <h5>{item.price}</h5>
            <button type="button" className="btn btn-outline-danger" onClick={()=>this.props.deleteOrder(item)}>Delete</button>
        </div>


  ));

    return(
      <div className="col">
        <div className="justify-content-md-center row ">
          <h2 className="main-title">Order Form</h2>
        </div>
        <div className="container">
          <div className="col justify-content-between mb-4">{orderList}</div>
        </div>
      <div className="col">
        <div classname="d-flex justify-content-end">
          <h4>Total: ${subtotal}</h4> <button className="ml-3" onClick={this.props.checkOut}>Check Out</button>
        </div>
      </div>
    </div>
      )
    }
};
export default OrderForm;
