import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {fvalue: true, lvalue: true}

  shFirstname = () => {
    this.setState(prevState => ({fvalue: !prevState.fvalue}))
  }

  shLastname = () => {
    this.setState(prevState => ({lvalue: !prevState.lvalue}))
  }

  render() {
    const {fvalue, lvalue} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.shFirstname}
            >
              Show/Hide Firstname
            </button>
            {fvalue ? null : <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.shLastname}
            >
              Show/Hide Lastname
            </button>
            {lvalue ? null : <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
