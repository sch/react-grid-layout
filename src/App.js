import React, { Component } from 'react';
import './App.css';
import Grid from "./Grid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid columns="2" gap="1em" templateRows="repeat(auto-fill, minmax(6em, auto))">
          <Grid.Item rowStart="span 2">panel one</Grid.Item>
          <Grid.Item>panel two</Grid.Item>
          <Grid.Item>panel three</Grid.Item>
          <Grid.Item column="1 / -1">panel four</Grid.Item>
        </Grid>
      </div>
    );
  }
}

export default App;
