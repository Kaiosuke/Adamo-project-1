const findNumber = (arr: number[]) => {
  let smallestNum = arr[0]
  let largestNum = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (smallestNum > arr[i]) smallestNum = arr[i]
    if (largestNum < arr[i]) largestNum = arr[i]
  }

  return largestNum - smallestNum
}

console.log(findNumber([6, 2, 3, 4, 10]))
