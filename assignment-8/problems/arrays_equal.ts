function arraysEqual(firstArray: number[], secondArray: number[]): boolean {
  if (firstArray.length && !secondArray.length) {
    return false;
  }
  if (secondArray.length && !firstArray.length) {
    return false;
  }
  const setA = new Set<number>(firstArray);
  const setB = new Set<number>(secondArray);

  if (setA.size !== setB.size) return false;

  for (const value of setA) {
    if (!setB.has(value)) return false;
  }

  return true;
}
