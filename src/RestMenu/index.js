import React, { Component } from 'react';
import OrderForm from './OrderForm'
import FoodList from './FoodList';
import "../CSS/FoodList.css";

class RestMenu extends Component {

constructor(props) {
  super(props);

  this.state = {
    appetizers: [],
    entrees: [],
    desserts: [],
    order: [],
    cart: [],
    subtotal: 0

  };
this.addOrder = this.addOrder.bind(this);
this.deleteOrder = this.deleteOrder.bind(this);


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
        item: `DEVILED EGGS`,
        description: `Country ham, capers, pickled okra, evoo`,
        price:7
      },
      {
        item: `CRISPY BRUSSELS`,
        description: `Brussel Sprouts with honey, tobasco, goat cheese`,
        price:8
      },
      {
        item: `CRAB BISQUE`,
        description: `Blue crab, sherry cayenne butter, spring onions `,
        price:9
      }
    ];
  this.setState ({ appetizers })


  const entrees = [
    {
      item: `BBQ SALMON`,
      description: `Red BBQ glazed North Coast salmon, sauteed spinach over jalapeno grits.`,
      price:30

    },
    {
      item: `BLACK AND BLUE`,
      description: `Pan seared, lightly blackened filet medallions, lump crab cakes, bearnaise, mash, asparagus.`,
      price:32
    },
    {
      item: `BLACK BEAN BURGER`,
      description: `Spicy black bean patty, avocado, pickled red onion chimichurri `,
      price:35
    },
  {
      item: `NEW YORK STRIP`,
      description: `16 oz USDA Prime, richly flavored, slightly firmer.`,
      price:40
    },
  ];
  this.setState ({ entrees })


  const desserts = [
  {
    item: `CREME BRULEE`,
    description: `Vanila bean custard with raw sugar crust`,
    price:12

  },
  {
    item: `BREAD PUDDING`,
    description: `Vanilla, raisins, jack daniel's whiskey sauce`,
    price:10
  },
  {
    item: `CHOCOLATE CAKE`,
    description: `Rich flourless cake, ganache, raspberry sauce `,
    price:12

  }
];
this.setState ({ desserts })
};


  render(){
    let showCart = this.state.cart;
    return(
      <div className="row">
      <FoodList appetizers={this.state.appetizers} entrees={this.state.entrees} desserts={this.state.desserts} addOrder={this.addOrder} />
      <OrderForm order={this.state.order} deleteOrder={this.deleteOrder}/>

    </div>

    );
  }
}

export default RestMenu;



// <RestMenu subtotal={this.state.total} subtotal = {this.state.subtotal} deleteOrder = {this.deleteOrder} checkOut = {this.checkOut}/>
