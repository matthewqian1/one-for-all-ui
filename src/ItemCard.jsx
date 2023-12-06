import React from "react";
import { Navigate } from "react-router-dom";

class ItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            base64Data: props.data.image,
            description: props.data.description,
            name: props.data.name,
            id: props.data.id,
            clicked: false
          };
          this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log("hello");
        this.setState({clicked: true});
      }

    render() {
        const { base64Data, description, name, id, clicked } = this.state;
        return <div className="itemCard" onClick={this.handleClick}>
            {clicked && (
          <Navigate to="/listing" replace={true} />
        )}
            <h1>{name}</h1>
            <img src={`data:image;base64,${base64Data}`} />
            <p>{description}</p>
            <span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star"></span>
<span className="fa fa-star"></span>
            </div>
    }

}

export default ItemCard;