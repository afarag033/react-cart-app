import React, { Component } from "react";

class Counter extends Component {
  // controlled components should not have a local state
  //   state = {
  //     value: this.props.counter.value,
  //     // tags: ["tag1", "tag2", "tag3"],
  //   };

  //   randerList() {
  //     return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  //   }

  //   handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.onSubtract(this.props.counter)}
          disabled={this.props.counter.value === 0}
        >
          -
        </button>
        <span className={this.getClassRender()}>{this.formatCount()}</span>
        <button
          type="button"
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>
        <button className="btn btn-primary btn-sm">Product</button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>{this.randerList()}</ul> */}
      </div>
    );
  }

  getClassRender() {
    let classes = "badge m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }

  formatCount() {
    const value = this.props.counter.value;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
