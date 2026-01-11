function lengthOfLastWord(s: string): number {
  if (s.length === 0) {
    return 0;
  }
  else {
    let splitArr = s.trim().split(" ");
    return splitArr[splitArr.length - 1].length;
  }
};