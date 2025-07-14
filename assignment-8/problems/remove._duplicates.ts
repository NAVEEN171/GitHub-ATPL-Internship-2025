function removeDuplicates(arr: number[]): number[] {
  if (!arr.length) {
    return [];
  } else {
    let arraySet = new Set<number>();
    let arr2: number[] = [];
    for (const item of arr) {
      arraySet.add(item);
    }
    for (const item of arraySet) {
      arr2.push(item);
    }
    return arr2;
  }
}
