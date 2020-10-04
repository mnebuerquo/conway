import { evaluateCell, listNeighbors } from './cell'
import {
  arrayToMap,
  mapToArray,
  insertCell,
  lookupCell,
  updateCell,
  isCellEvaluated,
} from './cellmap'

// game takes an initial state and returns a new state
// state is an array of live cells
// a cell is a point stored as an array ([x, y])

export const game = state => {
  const cellMap = arrayToMap(state)
  const getValue = lookupCell(cellMap)

  const finishedMap = state.reduce((outputMap, inputCell) => {
    // process all the neighbors of the cell, in case they come to life
    const listToEvaluate = [...listNeighbors(inputCell), inputCell]
    return listToEvaluate.reduce((newMap, cell) => {
      // Since we're looking at all neighbors as we go, don't re-evaluate a
      // cell if we've already hit it once.
      if (isCellEvaluated(newMap, cell)) {
        return newMap
      }
      // count neighbors of the cell
      const neighborCount = listNeighbors(cell)
        .map(getValue)
        .filter(Boolean).length
      // now we can evaluate and update cell
      return updateCell(
        newMap,
        cell,
        evaluateCell(neighborCount, getValue(cell))
      )
    }, outputMap)
  }, {})
  return mapToArray(finishedMap)
}

export const printGame = state => {
  const cellMap = arrayToMap(state)
  const getValue = lookupCell(cellMap)
  const width = 20
  const height = 20
  const live = ' H '
  const dead = ' . '
  const hwall = '---'
  const vwall = '|'
  const rows = [...Array(height).keys()]
  const cols = [...Array(width).keys()]
  const output = []
  output.push('+' + hwall.repeat(cols.length) + '+')
  rows.map(y => {
    const next = [vwall]
    cols.map(x => {
      next.push(getValue([x, y]) ? live : dead)
    })
    next.push(vwall)
    output.push(next.join(''))
  })
  output.push('+' + hwall.repeat(cols.length) + '+')
  console.log(output.join('\n'))
}
