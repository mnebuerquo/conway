export const cell = (neighborCount, initialState) =>
  (initialState && neighborCount >= 2 && neighborCount <= 3) ||
  neighborCount === 3
