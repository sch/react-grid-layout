import React, { Component, PropTypes } from 'react';

function hsla(hue, saturation, lightness, alpha) {
  return `hsla(${hue}, ${saturation * 100}%, ${lightness * 100}%, ${alpha})`
}

export default class Grid extends Component {
  static propTypes = {
    /**
     * Alignment each item along the column axis. For an auto-flow value of row
     * (default) for example, changing this allows you to specify whether each
     * item in that row (for all rows) is flush with the top of the gridline
     * ("start"), the bottom ("end"), centered between the two horizontal grid
     * lines vertically ("center"), or takes up the full height of the grid
     * area (this happens by default).
     */
    alignItems: PropTypes.oneOf([
      "start",
      "center",
      "end",
      "stretch", // default
    ]),

    alignContent: PropTypes.oneOf([
      "start",
      "center",
      "end",
      "space-between",
      "space-around",
      "space-evenly",
    ]),

    autoFlow: PropTypes.oneOf([
      "row",
      "column",
      "row dense",
      "column dense",
    ]),

    justifyItems: PropTypes.oneOf([
      "start",
      "center",
      "end",
      "stretch",
    ]),

    justifyContent: PropTypes.oneOf([
      "start",
      "center",
      "end",
      "space-between",
      "space-around",
      "space-evenly",
    ]),

    writingMode: PropTypes.oneOf([
      "horizontal-tb",
      "horizontal-bt",
      "vertical-rl",
      "vertical-lr",
    ]),
  }

  render () {
    const {
      alignContent,
      alignItems,
      autoFlow,
      columns,
      gap,
      justifyContent,
      justifyItems,
      templateColumns,
      templateRows,
      writingMode,
    } = this.props

    const style = { display: "grid" }

    if (columns) {
      style.gridTemplateColumns = `repeat(${parseInt(columns, 10)}, 1fr)`
    }

    if (autoFlow)        style.gridAutoFlow        = autoFlow
    if (templateColumns) style.gridTemplateColumns = templateColumns
    if (templateRows)    style.gridTemplateRows    = templateRows
    if (gap)             style.gridGap             = gap
    if (alignItems)      style.alignItems          = alignItems
    if (alignContent)    style.alignContent        = alignContent
    if (justifyItems)    style.justifyItems        = justifyItems
    if (justifyContent)  style.justifyContent      = justifyContent
    if (writingMode)     style.writingMode         = writingMode

    return React.createElement("div", {
      style: this.props.style ? Object.assign(style, this.props.style) : style
    }, this.props.children)
  }
}

class GridItem extends Component {
  render () {
    const {
      area,
      column,
      columnStart,
      columnEnd,
      children: child,
      row,
      rowStart,
      rowEnd,
    } = this.props

    let style = {}

    if (area)        style.gridArea        = area
    if (column)      style.gridColumn      = column
    if (columnStart) style.gridColumnStart = columnStart
    if (columnEnd)   style.gridColumnEnd   = columnEnd
    if (row)         style.gridRow         = row
    if (rowStart)    style.gridRowStart    = rowStart
    if (rowEnd)      style.gridRowEnd      = rowEnd

    if (this.props.style) {
      style = Object.assign(style, this.props.style)
    }

    if (React.isValidElement(child)) {
      if (child.props.style) {
        style = Object.assign(style, child.props.style)
      }
      return React.cloneElement(child, { style })
    } else {
      style = Object.assign(style, {
        backgroundColor: hsla(50, 0.3, 0.3, 0.7),
        color: "white",
        fontWeight: "bold",
        padding: "1.618em",
        borderRadius: "3px",
      })
      return React.createElement("div", { style }, child)
    }
  }
}

Grid.Item = GridItem
