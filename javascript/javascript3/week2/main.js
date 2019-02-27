/*Step 1 ---Part 1----*/
function divCheckerNumber(){
  const myNumber = prompt("Insert the number");
      return function(){
            const divideBy = prompt("Insert the divisor");
            if(myNumber%divideBy==0) return true;
            else return false;
          }
}
/*Step 1 ---Part 2----*/
function divCheckerNumber(divArr){
  let arr = [];
     for( let i=1; i<=1000;i++){
         arr.push(i);
     }

  return {
      addDivisor: function(div){
        let myDiv = [];
         for(let i =1;i<=div;i++){
           myDiv.push(i);
         }
        myDiv.forEach((myNumber)=>{
          let counter=0;
        arr.forEach((number)=>{
          if(number%myNumber==0){
            counter++;
          }
        })
        divArr.push(counter);
      })},
      getDivArr:function(){
        return divArr;
      }
  }
}

let x = divCheckerNumber([]);
x.addDivisor(30);
console.log(x.getDivArr());
