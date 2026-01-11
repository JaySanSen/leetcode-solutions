function appendCharacters(s: string, t: string): number {
  if (t.length === 0) {
    return s.length;
  }
  let i: number = 0;
  let j: number = 0;
  while(i < s.length && j < t.length){
    if(s.charAt(i) == t.charAt(j)){
      i++;
      j++;
    }
    else{
      i++;
    }
  }
return t.length - j;
}