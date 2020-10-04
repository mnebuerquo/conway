import { translate } from './transform'

describe('translate', () => {
  it('translates a coordinate to a new position', () => {
    expect(translate([2, 3])([4, 5])).toStrictEqual([6, 8])
  })
})
