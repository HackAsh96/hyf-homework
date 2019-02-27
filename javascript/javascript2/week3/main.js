const searchLink = document.getElementById("search-btn");
      searchLink.addEventListener("click",getDataAPI);

const searchLink1 = document.getElementById("search-btn1");
      searchLink1.addEventListener("click",userInput);

const searchText1=document.getElementById("search-txt1");
      searchText1.addEventListener("click",help);

function getDataAPI(){
const url="https://api.github.com/orgs/HackYourFuture/repos";
 fetch(url)
 .then((resp) => resp.json())
 .then(function (data) {
   let searchText = document.getElementById("search-txt").value;
   for(let i=0;i<data.length;i++){
     let dataAPI = data[i].name.toLowerCase();
     let inputValue = searchText.toLowerCase();
     if(inputValue===dataAPI){
       callXHR(data[i].name);

     }
     else
      errorHandler(inputValue);
     }
       function  errorHandler(userType) {

        try{
           if(userType=="") {throw "Invalid type!";}
        }
        catch(err){
          document.getElementById("search-txt").value = err;
          document.getElementById("search-txt").style.color="red";
        }
      }
})
}

function callXHR(name){
const xhr = new XMLHttpRequest();
const url=`https://api.github.com/search/repositories?q=user:HackYourFuture+${name}`;
const url1 =`https://api.github.com/repos/HackYourFuture/${name}/contributors`
xhr.open('GET',url, true);

xhr.onreadystatechange = processRequest;
function processRequest() {
 if(xhr.readyState==4 && xhr.status==200){
   let yesOrNo = prompt(`Do you want to see the contributors or the module ${name}?     Contributors: press 1     API: press 2`);
   if(yesOrNo=="2") window.open(url);
   else if(yesOrNo=="1") window.open(url1);
   else if(yesOrNo=="") alert("Invalid Type, try again");
 }
}
xhr.send();
}
  function help(){
    alert("Choose between:      AVATAR or NAME ");
     searchText1.removeEventListener("click",help);
    }
function userInput(){
  let searchText = document.getElementById("search-txt1").value;
  getDataAPI1(searchText);
}
function getDataAPI1(userText){
  const xhr = new XMLHttpRequest();
  const url=`https://api.github.com/users/${userText}`;
  xhr.open('GET',url, true);
  xhr.onreadystatechange = processRequest;
  function processRequest() {
   if(xhr.readyState==4 && xhr.status==200){
     if(userText=="name"){
       window.open(url);
     }
     else if(userText=="avatar"){
       let response = JSON.parse(xhr.responseText)
      let img = response.avatar_url;
       window.open(img);
     }
   }
   else errorHandler1(userText,xhr.status);
 }
 xhr.send();
}

   function  errorHandler1(typeIn,myStatus) {

    try{
       if(typeIn=="") {throw "Invalid type!";}
       if(myStatus!==200) {throw "Does not exist!"}
    }
    catch(err){
      document.getElementById("search-txt1").value = err;
      document.getElementById("search-txt1").style.color="red";
    }
  }




function clearThis(target) {
    if (target.value) {
        target.value = "";
        document.getElementById("search-txt").style.color="white";
        document.getElementById("search-txt1").style.color="white";
        searchText1.addEventListener("click",help);
    }
}
