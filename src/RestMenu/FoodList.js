import React, { Component } from 'react';

class FoodItem extends Component  {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <main className="menu-wrapper">
        <div className="container">
          <ul className="menu-list-appetizers">
            <div className="list-group-item list-group-item-action">
              <div className="row ">
                <h5 className="col-10 ">{this.props.item.item}</h5>
                <h5 className="col-2">${this.props.item.price}</h5>
              </div>
                <p className="col-md-auto mb-1"> {this.props.item.description}</p>
                <button type="button" className="btn btn-success" onClick={()=>this.props.addOrder(this.props.item)}>Add to Order</button>
            </div>
          </ul>
        </div>
    </main>

  );
    }
}


class FoodList extends Component {

  render() {
    const appetizers = this.props.appetizers.map((appetizer)=> <FoodItem  addOrder={this.props.addOrder} deleteOrder={this.props.deleteORder} subtotal={this.props.subtotal} item={appetizer}/>);
    const entrees = this.props.entrees.map((entree)=> <FoodItem addOrder={this.props.addOrder} deleteOrder={this.props.deleteORder} subtotal={this.props.subtotal} item={entree}/>);
    const desserts = this.props.desserts.map((dessert)=> <FoodItem addOrder={this.props.addOrder} deleteOrder={this.props.deleteORder} subtotal={this.props.subtotal} item={dessert}/>);
    return(

      <div className="col">
        <div className="col-12">
        <h2 className="foodCategory">Appetizers</h2>
      {appetizers}
      <h2 className="foodCategory">Entrees</h2>
      {entrees}
      <h2 className="foodCategory">Desserts</h2>
      {desserts}
      </div>
      </div>
    )
  }
}
export default FoodList;
