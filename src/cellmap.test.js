import { insertCell, arrayToMap, mapToArray, lookupCell } from './cellmap'

const arrayOfCells = [
  [1, 1],
  [2, 1],
  [2, 3],
]
const mapOfCells = { 1: { 1: true }, 2: { 1: true, 3: true } }

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
    const mapWithDeadCells = {
      1: { 1: true },
      2: { 1: true, 3: true, 5: false },
    }
    expect(mapToArray(mapOfCells)).toStrictEqual(arrayOfCells)
    expect(mapToArray(mapWithDeadCells)).toStrictEqual(arrayOfCells)
  })

  it('looks up cell value from map', () => {
    const get = lookupCell(mapOfCells)
    expect(get([1, 4])).toBeFalsy()
    expect(get([2, 3])).toBeTruthy()
  })
})
