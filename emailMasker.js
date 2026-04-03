function maskEmail(email){
  let characters = email.indexOf("@");
  let dominio = email.slice(characters);
  let sliceCharacters = email.slice(1, characters);
  let totalCharacters = sliceCharacters.length - 1;

  let totalAsterisk = "*".repeat(totalCharacters);

  return email[0] + totalAsterisk + email[characters - 1] + dominio
}

let email = "pedroCorreo123@gmail.com";

console.log(maskEmail("apple.pie@example.com")); //SALIDA: a*******e@example.com
console.log(maskEmail("freecodecamp@example.com")); //SALIDA: f**********p@example.com
console.log(maskEmail("user@domain.org")); //SALIDA: u**r@domain.org
console.log(maskEmail(email)); //SALIDA: p************3@gmail.com