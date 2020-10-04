import { translate } from './transform'

export const evaluateCell = (neighborCount, initialState) =>
  (initialState && neighborCount >= 2 && neighborCount <= 3) ||
  neighborCount === 3

export const listNeighbors = ([x, y]) =>
  [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ].map(translate([x, y]))
