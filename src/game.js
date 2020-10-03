import { evaluateCell, listNeighbors } from './cell'
import {
  arrayToMap,
  mapToArray,
  insertCell,
  lookupCell,
  updateCell,
} from './cellmap'

export const game = state => {
  const cellMap = arrayToMap(state)
  const getValue = lookupCell(cellMap)

  return mapToArray(
    state.reduce((outputMap, inputCell) => {
      // process all the neighbors of the cell, in case they come to life
      return listNeighbors(inputCell).reduce((newMap, cell) => {
        // count neighbors of the cell
        const neighborCount = listNeighbors(cell)
          .map(getValue)
          .filter(Boolean).length
        return updateCell(newMap, evaluateCell(neighborCount, getValue(cell)))
      }, outputMap)
    }, {})
  )
}
