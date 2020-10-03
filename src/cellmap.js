export const insertCell = (cellMap, [x, y]) => ({
  ...cellMap,
  [x]: {
    ...(cellMap[x] || {}),
    [y]: true,
  },
})

export const arrayToMap = (cellList) => cellList.reduce(insertCell, {})

export const mapToArray = (cellMap) =>
  Object.keys(cellMap)
    .map((x) =>
      Object.keys(cellMap[x])
        .filter(y => cellMap[x][y])
        .map((y) => [x, y].map(n=>parseInt(n)))
    )
    .reduce((list, next) => list.concat(next), [])
