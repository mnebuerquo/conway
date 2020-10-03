import { cell } from './game'

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
})
