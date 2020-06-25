import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color,
      border: ''
    }
  }

  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }

  handleMouseEnter = () => {
    this.setState({
      border: `1px solid ${this.props.selectedColor}`
    })
  }

  handleMouseLeave = () => {
    this.setState({
      border: ''
    })
  }

  render() {
    return (
      <div className="cell" style={{ backgroundColor: this.state.color, border: this.state.border }} onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
      </div>
    )
  }

}