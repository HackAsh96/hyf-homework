const searchButton = document.getElementById("search-btn");
        searchButton.addEventListener("click",getDataAPI);

function getDataAPI(){
const url="https://api.github.com/orgs/HackYourFuture/repos";
 fetch(url)
 .then((resp) => resp.json())
 .then(function (data) {
   let searchText = document.getElementById("search-txt").value;
   const clear=document.getElementById("searh-txt");
   data.filter(function(newData){
     let y = newData.name.toLowerCase();
     let z = searchText.toLowerCase();
     if(z===y){
       window.open(`https://github.com/HackYourFuture/${newData.name}`);
     }

   })
});
}
function clearThis(target) {
    if (target.value) {
        target.value = "";
    }
}
