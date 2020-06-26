import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class MainComponent extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((counter) => counter.id !== id);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleSubtract = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) counters[index].value--;
    this.setState({ counters });
  };

  handleAddProduct = () => {
    const counters = [...this.state.counters];
    counters.push({ id: counters.length + 1, value: 0 });
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalItems={this.state.counters
            .map((c) => c.value)
            .reduce((a, b) => a + b, 0)}
        ></NavBar>
        <main className="container">
          <Counters
            counters={this.state.counters}
            totalItems={this.state.counters
              .map((c) => c.value)
              .reduce((a, b) => a + b, 0)}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onSubtract={this.handleSubtract}
            onAddProduct={this.handleAddProduct}
            onReset={this.handleReset}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default MainComponent;
