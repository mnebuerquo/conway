# About The Implementation

## Trying it out

Edit [src/game.test.js](./src/game.test.js) and add or remove cells in the
second test, in the `initial` array.

## Game State

The game state is represented as an array of live cells, where each cell is a
coordinate pair array.

```javascript
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
```

The above example consists of 8 live cells.

## API

The `game(state)` function in [game.js](./src/game.js) evaluates a single
generation of the game and returns the new state.

## Visualizing

There is a printGame function which will print the game state to the console.
The displayed area is a 20x20 grid from (0, 0) at the top left through
(19, 19) at the lower right.

