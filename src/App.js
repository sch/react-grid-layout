import React, { Component } from 'react';
import './App.css';
import Grid from "./Grid";

// This is a bit awkward. If all components that were intented to be items
// of a grid obeyed a contract that they would accept a `style` prop and
// correctly assign it to the style of their top-level element, then this would
// be a great pattern! `<Grid.Item>` would use React.cloneElement to provide
// the style props that it normally creates a div for. As it stands though,
// there's no automatic way to style props, so if this component below didn't
// forward its props to the `footer` it return, this pattern wouldn't work.
function Footer ({ children, ...props }) {
  return (<footer className="Footer" {...props}>{children}</footer>)
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid columns="2" gap="1em" templateRows="repeat(auto-fill, minmax(6em, auto))">
          <Grid.Item rowStart="span 2">panel one</Grid.Item>
          <Grid.Item>panel two</Grid.Item>
          <Grid.Item>panel three</Grid.Item>
          <Grid.Item column="2" row="2">
            <div>As a regular div, this should recieve styles from its parent</div>
          </Grid.Item>
          <Grid.Item column="1 / -1">
            <Footer>This is the footer, it should be full-width</Footer>
          </Grid.Item>
        </Grid>
      </div>
    );
  }
}

export default App;
