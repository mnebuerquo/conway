import { cell, listNeighbors } from './cell'

describe('cell', () => {
  it('dies of underpopulation', () => {
    expect(cell(1, true)).toBeFalsy()
    expect(cell(1, false)).toBeFalsy()
    expect(cell(0, true)).toBeFalsy()
  })

  it('dies of overpopulation', () => {
    expect(cell(4, true)).toBeFalsy()
    expect(cell(5, false)).toBeFalsy()
    expect(cell(6, true)).toBeFalsy()
  })

  it('stays alive with the right number of neighbors', () => {
    expect(cell(2, true)).toBeTruthy()
    expect(cell(2, false)).toBeFalsy()
    expect(cell(3, true)).toBeTruthy()
  })

  it('reproduces with exactly three neighbors', () => {
    expect(cell(3, true)).toBeTruthy()
    expect(cell(3, false)).toBeTruthy()
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
