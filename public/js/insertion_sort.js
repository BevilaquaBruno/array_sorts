function insertion_sort(list) {
  const clonedList = [...list];
  for (let increment = 1; increment < clonedList.length; increment++) {
    const currentValue = clonedList[increment];
    let j = increment - 1;
    while (j >= 0 && clonedList[j] > currentValue) {
      clonedList[j + 1] = clonedList[j];
      j -= 1;
    }
    clonedList[j + 1] = currentValue;
  }
  return clonedList;
}
