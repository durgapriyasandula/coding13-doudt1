// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  render() {
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList
    return (
      <li className="list-container">
        <button type="button" className="button-class">
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="leftArrow"
          />
        </button>
        <div className="component-sub-container">
          <img src={imgUrl} />
          <p className="name">{username}</p>
          <p className="companyName">{companyName}</p>
          <p className="companyName">{description}</p>
        </div>
        <button type="button" className="button-class">
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </li>
    )
  }
}

export default ReviewsCarousel
