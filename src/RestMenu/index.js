import React, { Component } from 'react';
import OrderForm from './OrderForm'
import FoodList from './FoodList';

class RestMenu extends Component {

constructor(props) {
  super(props);

  this.state = {
    appetizers: [],
    entrees: [],
    order: [],
    cart: [],
    subtotal: 0

  };
this.addOrder = this.addOrder.bind(this);
this.deleteOrder = this.deleteOrder.bind(this);
this.checkOut = this.checkOut.bind(this);

}

addOrder(item){
  console.log(item);
  const order = [...this.state.order, item];
  //console.log(order);
  this.setState({order, order});


}

deleteOrder(item){
  console.log(item);
  const order = [...this.state.order];
  const index = order.indexOf(order);
  order.splice(index, 1);
  this.setState({order, order});
}


componentDidMount() {
  const appetizers = [
      {
        item: `Spinach and Artichoke Dip`,
        description: `Creamy spinach and artichoke dip topped with Parmesan cheese. Served with freshly made white corn tortilla chips and our chipotle lime salsa`,
        price:7

      },
      {
        item: `Mozzerella Sticks with Sauce`,
        description: `Crispy outside with melty Mozzarella inside, this favorite is served with marinara sauce or ranch dressing.`,
        price:8
      },
      {
        item: `Bread Sticks`,
        description: `Five golden brown signature breadsticks brushed with garlic and parsley butter. Served with creamy Alfredo sauce for dipping. `,
        price:8
      }
    ];
  this.setState ({ appetizers })


  const entrees = [
    {
      item: `Steak`,
      description: `Best in the Nation`,
      price:10

    },
    {
      item: `Chicken`,
      description: `Fall off the Bone`,
      price:12
    },
    {
      item: `Roast Beef`,
      description: `Slow Cooked All Night `,
      price:11

    }
  ];
  this.setState ({ entrees })
};

  checkOut(e){
    e.preventDefault();
    this.setState({order:[], subtotal: 0});
    alert("Your order has been placed !");
  }


  render(){
    let showCart = this.state.cart;
    return(
      <div className="row">
      <FoodList appetizers={this.state.appetizers} entrees={this.state.entrees} addOrder={this.addOrder} />
      <OrderForm order={this.state.order} deleteOrder={this.deleteOrder}/>
    </div>

    );
  }
}

export default RestMenu;



// <RestMenu subtotal={this.state.total} subtotal = {this.state.subtotal} deleteOrder = {this.deleteOrder} checkOut = {this.checkOut}/>
