// Age-ify (A future age calculator)
const yearOfBirth = 1996;
let yearFuture = 2056;
let age = yearFuture - yearOfBirth;
console.log("You will be"+" "+age+" "+"years old in"+" "+yearFuture);
// Goodboy-Oldboy (A dog age calculator) (Optional)
const dogYearOfBirth = 2007;
const dogYearFuture = 2056;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;
if(shouldShowResultInDogYears){
  // We have done the equation based on the 7:1 ratio, so 7:1=humanYear:x
  console.log("Your dog will be"+" "+dogYear+" "+"dog years old in 2020");
}
else{
  console.log("Your dog will be"+" "+(dogYear*7)+" "+"human years old in 2020");
}
// Housey pricey (A house price estimator)
const peterHouseExtimation = (8*10*10*2.5*1000)+(100*300);
const juliaHouseExtimation = (5*11*8*2.5*1000)+(70*300);
let   peterPriceHouse = 2500000;
let   juliaPriceHouse = 1000000;
console.log("Peter's house price':"+" "+peterPriceHouse);
console.log("Julia's house price:"+" "+juliaPriceHouse);

if(peterHouseExtimation>juliaHouseExtimation){
  console.log("Peter is paying"+" "+peterHouseExtimation+"and that is less");
}
else{
  console.log("Julia is paying"+" "+juliaHouseExtimation+"and that is more");
}
// Ez Namey (Startup name generator) (Optional)
const firstWords = ["Dig","Corporate","Love","Faith","Hack"];
const secondWords = ["Inside","Up","Shoot","Future","Co."];
//Asking Console to choose from the LENGTH of my array one of the items.In this case are 5 items.
const randomNameChoice = firstWords[Math.floor(Math.random()*firstWords.length)]+" "
+secondWords[Math.floor(Math.random()*secondWords.length)];
console.log(randomNameChoice);
