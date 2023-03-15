// Write your code here
import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mango: 0, bananas: 0}

  magocount = () => {
    this.setState(prev => ({mango: prev.mango + 1, bananas: prev.bananas}))
  }

  bananascount = () => {
    this.setState(prev => ({mango: prev.mango, bananas: prev.bananas + 1}))
  }

  render() {
    const {mango, bananas} = this.state
    return (
      <div className="card-container">
        <h1 className="heading">
          Bob ate <span className="sp"> {mango} </span> mangoes
          <span className="sp"> {bananas} </span> bananas
        </h1>
        <div className="images">
          <div className="imgbtn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
              alt="mango"
              className="image"
            />
            <div className="center">
              <button className="but" type="button" onClick={this.magocount}>
                Eat Mango
              </button>
            </div>
          </div>
          <div className="imgbtn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="image"
            />
            <div className="center">
              <button className="but" type="button" onClick={this.bananascount}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
