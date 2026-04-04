function confirmEnding(string, endString){
  let lengthString = string.slice(-endString.length) === endString
  return lengthString
}



confirmEnding("Bastian", "n") //true
confirmEnding("Congratulation", "on") // true
confirmEnding("Connor", "n") // false

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") //false

confirmEnding("He has to give me a new name", "name") // true
confirmEnding("Open sesame", "same") //true

confirmEnding("Open sesame", "sage") //false
confirmEnding("Open sesame", "game") // false

confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain") //false
confirmEnding("Abstraction", "action") //true
