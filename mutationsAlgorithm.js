function mutation(arr){
  let stringChecker = arr[0].toLowerCase();

  for(let char of arr[1].toLowerCase()){
    if(stringChecker.indexOf(char) == -1){
      return false
    }
  }
  return true
}

mutation(["hello", "hey"])