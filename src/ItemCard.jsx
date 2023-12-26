import React from "react";
import { Navigate } from "react-router-dom";

class ItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            base64Data: props.data.image,
            name: props.data.name,
            id: props.data.id,
            price: props.data.price,
            clicked: false,
            rating: props.data.rating
          };
          this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({clicked: true});
      }

    render() {
        const { base64Data, name, id, clicked, price, rating } = this.state;
        
        var starValues = [];
        let buffer = rating;
        for (let i = 0; i < 5; i++) {
          if (buffer >= 0.5) {
            starValues.push('fa-star checked');
          } else {
            starValues.push('fa-star');
          }

          buffer--;
        }

        return <div className="itemCard" onClick={this.handleClick}>
            {clicked && (
          <Navigate to="/listing" replace={true} state={{id: id}}/>
        )}
            <img src={`data:image;base64,${base64Data}`} />
            <h1>{name}</h1>
            <p>${price}</p>
            {starValues.map((val) => (
              <span className={`fa ${val}`}></span>
            )
            )
            }
            </div>
    }

}

export default ItemCard;