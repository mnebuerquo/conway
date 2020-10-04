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

    expect(result).toStrictEqual(expected)
  })

  it('plays another game without assertions so you can experiment', () => {
    // TODO: edit the initial array to add or remove cells and try it out
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
    const result = game(initial)
    // see the result of one iteration
    printGame(initial)
    printGame(result)
  })
})
