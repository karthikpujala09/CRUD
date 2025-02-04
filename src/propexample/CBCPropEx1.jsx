import React, { Component } from "react";

class CBCPropEx1 extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.username}</h1>
        <h2>{this.props.age}</h2>
        <ul>
          {this.props.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        {this.props.isMarried ? <h1>Married</h1> : <h1>Not Married</h1>}
        <button onClick={this.props.sendFun}>Click</button>
      </div>
    );
  }
}

export default CBCPropEx1;
