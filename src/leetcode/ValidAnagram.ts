function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) {
    return false;
  }
  s = s.toLowerCase();
  t = t.toLowerCase();

  let checkArr: number[] = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    checkArr[s.charCodeAt(i) - 97]++;
    checkArr[t.charCodeAt(i) - 97]--;
  }

  let returnValue: boolean = true;
  checkArr.forEach(item => {
    if (item !== 0) {
      returnValue = false;
    }
  })
  return returnValue;

};