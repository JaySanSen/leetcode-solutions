function replaceElements(arr: number[]): number[] {
  if (arr.length === 1) {
    return [-1];
  }
  let tempGreatest = arr[arr.length - 1];
  arr[arr.length - 1] = -1;
  for (let i = arr.length - 2; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = tempGreatest;

    if (temp > tempGreatest) {
      tempGreatest = temp;
    }
  }
  return arr;
};



// function replaceElements(arr: number[]): number[] {
//     let maxR = -1
//     for (let i = arr.length - 1; i >=0; i--) {
//         let temp = arr[i];
//         arr[i] = maxR
//         if (maxR < temp) {
//             maxR = temp
//         }
//     }
//     return arr
// };