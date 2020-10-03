import { evaluateCell, listNeighbors } from './cell'

describe('evaluateCell', () => {
  it('dies of underpopulation', () => {
    expect(evaluateCell(1, true)).toBeFalsy()
    expect(evaluateCell(1, false)).toBeFalsy()
    expect(evaluateCell(0, true)).toBeFalsy()
  })

  it('dies of overpopulation', () => {
    expect(evaluateCell(4, true)).toBeFalsy()
    expect(evaluateCell(5, false)).toBeFalsy()
    expect(evaluateCell(6, true)).toBeFalsy()
  })

  it('stays alive with the right number of neighbors', () => {
    expect(evaluateCell(2, true)).toBeTruthy()
    expect(evaluateCell(2, false)).toBeFalsy()
    expect(evaluateCell(3, true)).toBeTruthy()
  })

  it('reproduces with exactly three neighbors', () => {
    expect(evaluateCell(3, true)).toBeTruthy()
    expect(evaluateCell(3, false)).toBeTruthy()
  })

  it('can figure out its neighbors addresses', () => {
    expect(listNeighbors(5, 7)).toStrictEqual([
      [4, 6],
      [4, 7],
      [4, 8],
      [5, 6],
      [5, 8],
      [6, 6],
      [6, 7],
      [6, 8],
    ])
  })
})
