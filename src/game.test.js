import { game, printGame } from './game'

describe('game', () => {
  it('plays the game', () => {
    const initial = [
      [3, 2],
      [4, 2],
      [4, 3],
      [9, 7],
      [9, 8],
      [9, 9],
      [14, 15],
      [14, 16],
    ]
    const expected = [
      [3, 2],
      [3, 3],
      [4, 2],
      [4, 3],
      [8, 8],
      [9, 8],
      [10, 8],
    ]

    const result = game(initial)

    printGame(initial)
    printGame(result)

    expect(result).toStrictEqual(expected)
  })
})
