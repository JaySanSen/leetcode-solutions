function isSubsequence(s: string, t: string): boolean {
  if (s.length === 0) {
    return true;
  }
  if (t.length === 0) {
    return false;
  }
  let i: number = 0;
  let j: number = 0;

  while (i < s.length && j < t.length) {
    if (s.charAt(i) === t.charAt(j)) {
      i++; // move only if the character matches
    }
    j++; // Always move the second string (the bigger string)
  }
  return i === s.length;
};
