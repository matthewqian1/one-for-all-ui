import React from "react";
import { Navigate } from "react-router-dom";

class ItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            base64Data: props.data.image,
            name: props.data.name,
            id: props.data.id,
            cart: props.data.cart,
            price: props.data.price,
            clicked: false
          };
          this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({clicked: true});
      }

    render() {
        const { base64Data, name, id, clicked, cart, price } = this.state;
        return <div className="itemCard" onClick={this.handleClick}>
            {clicked && (
          <Navigate to="/listing" replace={true} state={{cart: cart, id: id}}/>
        )}
            <img src={`data:image;base64,${base64Data}`} />
            <h1>{name}</h1>
            <p>${price}</p>
            <span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star"></span>
<span className="fa fa-star"></span>
            </div>
    }

}

export default ItemCard;