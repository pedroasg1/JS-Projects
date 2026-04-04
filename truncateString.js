function truncateString(string, number){
  let longString = string.length;
  
  if (longString <= number){
    return string
  } else {
    let split = string.slice(0, number);
    return split + "...";
  }
}


console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)) //A-tisket...

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)) //Peter Piper...


console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)) //A-tisket a-tasket A green and yellow basket

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)) //A-tisket a-tasket A green and yellow basket

console.log(truncateString("A-", 1)) //A...
console.log(truncateString("Absolutely Longer", 2)) //Ab...