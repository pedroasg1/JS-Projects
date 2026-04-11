function findLongestWordLength(string){
  const wordsArray = string.split(" ");
  console.log(wordsArray)

  let count = 0;

  for(let i = 0; i < wordsArray.length; i++){
    if(wordsArray[i].length > count){
      count = wordsArray[i].length
    }
  }
  return count
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
