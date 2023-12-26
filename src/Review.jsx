import React from "react";
import { Navigate } from "react-router-dom";

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: props.data.review,
            id: props.data.id,
          };
    }

    render() {
        const { id, review } = this.state;
        
        var starValues = [];
        let buffer = review.rating;
        for (let i = 0; i < 5; i++) {
          if (buffer >= 0.5) {
            starValues.push('fa-star checked');
          } else {
            starValues.push('fa-star');
          }

          buffer--;
        }

        console.log(review);
        return <div className="review">
                    <username>{review.username}</username>
                    <br></br>
                    <br></br>
                    <div>
                    {starValues.map((val) => (
                    <span className={`fa ${val}`}></span>
                            )
                        )
                    }
                    <p>{review.comment}</p>
                    </div>
                    <br></br>
                    <div>{review.date}</div>
                
            </div>
    }

}

export default Review;