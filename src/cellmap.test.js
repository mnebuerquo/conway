import { insertCell, arrayToMap, mapToArray, lookupCell, isCellEvaluated } from './cellmap'

const arrayOfCells = [
  [1, 1],
  [2, 1],
  [2, 3],
]
const mapOfCells = { 1: { 1: true }, 2: { 1: true, 3: true } }
const mapWithDeadCells = {
  1: { 1: true },
  2: { 1: true, 3: true, 5: false },
}

describe('cellmap', () => {
  it('can insert cells into the map', () => {
    expect(insertCell(mapOfCells, [9, 3])).toStrictEqual({
      1: { 1: true },
      2: { 1: true, 3: true },
      9: { 3: true },
    })
  })

  it('converts from array to map', () => {
    expect(arrayToMap(arrayOfCells)).toStrictEqual(mapOfCells)
  })

  it('converts from map to array', () => {
    expect(mapToArray(mapOfCells)).toStrictEqual(arrayOfCells)
    expect(mapToArray(mapWithDeadCells)).toStrictEqual(arrayOfCells)
  })

  it('looks up cell value from map', () => {
    const get = lookupCell(mapOfCells)
    expect(get([1, 4])).toBeFalsy()
    expect(get([2, 3])).toBeTruthy()
  })

  it('can tell if we already added a value for a cell', () => {
    expect(isCellEvaluated(mapWithDeadCells, [1, 1])).toBeTruthy()
    expect(isCellEvaluated(mapWithDeadCells, [2, 5])).toBeTruthy()
    expect(isCellEvaluated(mapWithDeadCells, [4, 1])).toBeFalsy()
    expect(isCellEvaluated(mapWithDeadCells, [1, 4])).toBeFalsy()
  })
})
