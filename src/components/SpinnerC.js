import React, { Component } from 'react'

export class SpinnerC extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className ="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    )
  }
}

export default SpinnerC

