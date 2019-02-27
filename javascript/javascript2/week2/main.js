// CallBack exercises
function myCallBacks(start,end,threeCallback,fiveCallback){
  let myValues35=[];
  let myValues5=[];
  let myValues3=[];
  for(let i=start;i<=end;i++){

    if(i%3==0 && i%5==0){
      myValues35.push(i);
      bothValues(i);
    }
    else if(i%5==0){
      fiveCallback(i);
      myValues5.push(i);

    }
    else if(i%3==0){
      threeCallback(i);
      myValues3.push(i);
    }
}
console.log(myValues35);
console.log(myValues3);
console.log(myValues5);
}
function bothValues(i){
  console.log("This is divisible by 3 and 5: "+i);
}
function sayThree(i){
  console.log("This is divisible by 3: "+i);
}
function sayFive(i){
  console.log("This is divisible by 5: "+i);
}
//myCallBacks(1,30,sayThree,sayFive);//Uncomment the function if you want to try it

//----------SECOND METHOD WITH PROMPT------------------------------------------
function myCallBacks(start1,end1) {
  let myValues1=[];
  for(let num=Number(start1);num<=Number(end1);num++){

  if(num%3==0 && num%5==0){
  myValues1.push(num);
  console.log(num+" is divisible by 3 and by 5");
}
else if(num%5==0){
  myValues1.push(num);
  callFive(num);
}
else if(num%3==0){
  myValues1.push(num);
  callThree(num);
}
else console.log("This number is not divisible: ",num);
}
console.log("These are the divisible values:",myValues1);
}
function processUserInput(divisible) {
  const start1 =prompt("Please enter your start value.");
  const end1 =prompt("Please enter your last value.");
  divisible(start1,end1);
}
function callThree(num){
  console.log(num+" is divisible only by 3");
}
function callFive(num){
  console.log(num+" is divisible only by 5");
}
//processUserInput(myCallBacks);//Uncomment the function if you want to try it.

// Solving the exercise in differents loop methods
// --------for loop------------------------
function forLoop(stringSet, numSets) {
  let valueArray = [];
  for(i=0;i<numSet;i++){
    if(numSet<0){
      console.log("");
    }
    valueArray.push(stringSet);
  }
  console.log(valueArray);
}
//forLoop("Hello World", 3);//Uncomment the function if you want to try it.

// -------while loop----------------------One Example with the promt command
function whileLoop(stringSet,numSet){
  let valueArray =[];
  let i=0;
  while(i<Number(numSet)){
    if(numSet<0){
      console.log("");
    }
    valueArray.push(stringSet);
    i++;
  }
  console.log(valueArray);
}
function userInput(setInput){
const stringSet =prompt("Please enter your String.");
const numSet =prompt("Please enter your loop Number.");
setInput(stringSet,numSet);
}
//userInput(whileLoop);
// -------do while loop--------------------------
function doLoop(stringSet,numSet) {
  let valueArray=[];
  let i=0;
do{
  if(numSet<0){
    console.log(" ");
  }
    valueArray.push(stringSet);
    i++;
}
while(i<numSet);
console.log(valueArray);
}
//doLoop("HYF", 3);Uncomment this call function to see the do loop working

//---------1.9 exercise on commenting the program.
let x = 9;            //let x=9;
function f1(val) {    //function f1(val){
    val = val+1;      //val++;
    return val;       //console.log(val);}
}                     //f1(x);
f1(x);
console.log(x);
/*Cause here your logging out the raw value of x , despite the reason x is assigned as global,
and it is outside the function.
To console the right value you have to get rid of the return val , cause it gives you a return of 10
but it doesn't print it out, so you print out console.log(val).
When you call the function,the parameter it change , so you are assigning the value of x to val*/

let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);
