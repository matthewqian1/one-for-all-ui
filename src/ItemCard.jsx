import React from "react";

class ItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            base64Data: props.data.image,
            description: props.data.description,
            name: props.data.name
          };
    }

    render() {
        const { base64Data, description, name } = this.state;
        return <div className="itemCard">
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