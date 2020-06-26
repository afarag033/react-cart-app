import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className={this.getClassRender()}
          disabled={this.props.totalItems === 0}
        >
          Reset
        </button>
        <button
          onClick={this.props.onAddProduct}
          className="btn-success btn-sm m-2"
        >
          Add Product
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.props.onIncrement}
            onSubtract={this.props.onSubtract}
            onDelete={this.props.onDelete}
          ></Counter>
        ))}
      </div>
    );
  }

  getClassRender = () => {
    let classes = "btn-sm m-2 btn-";
    return (classes +=
      this.props.totalItems === 0 ? "outline-primary" : "primary");
  };
}

export default Counters;
