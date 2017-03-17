import React, { Component, PropTypes } from 'react';

function hsla(hue, saturation, lightness, alpha) {
  return `hsla(${hue}, ${saturation * 100}%, ${lightness * 100}%, ${alpha})`
}

export default class Grid extends Component {
  static propTypes = {
    alignItems: PropTypes.oneOf(["start", "center", "end"]),
    alignContent: PropTypes.oneOf(["start", "center", "end"]),
    justifyItems: PropTypes.oneOf(["start", "center", "end"]),
    justifyContent: PropTypes.oneOf(["start", "center", "end"]),
  }

  render () {
    const {
      alignContent,
      alignItems,
      columns,
      gap,
      justifyContent,
      justifyItems,
      templateColumns,
      templateRows,
    } = this.props

    const style = { display: "grid" }

    if (columns) {
      style.gridTemplateColumns = `repeat(${parseInt(columns, 10)}, 1fr)`
    }

    if (templateColumns) {
      style.gridTemplateColumns = templateColumns
    }

    if (templateRows) {
      style.gridTemplateRows = templateRows
    }

    if (gap) {
      style.gridGap = gap
    }

    if (alignItems)     style.alignItems     = alignItems
    if (alignContent)   style.alignContent   = alignContent
    if (justifyItems)   style.justifyItems   = justifyItems
    if (justifyContent) style.justifyContent = justifyContent

    return React.createElement("div", {
      style: this.props.style ? Object.assign(style, this.props.style) : style
    }, this.props.children)
  }
}

class GridItem extends Component {
  render () {
    console.log(this.props)
    const {
      column,
      columnStart,
      columnEnd,
      children,
      row,
      rowStart,
      rowEnd,
    } = this.props

    const style = {
      backgroundColor: hsla(50, 0.3, 0.3, 0.7),
      color: "white",
      fontWeight: "bold",
      padding: "1.618em",
      borderRadius: "3px",
    }

    if (column)      style.gridColumn      = column
    if (columnStart) style.gridColumnStart = columnStart
    if (columnEnd)   style.gridColumnEnd   = columnEnd
    if (row)         style.gridRow         = row
    if (rowStart)    style.gridRowStart    = rowStart
    if (rowEnd)      style.gridRowEnd      = rowEnd

    return React.createElement("div", { style }, children)
  }
}

Grid.Item = GridItem
