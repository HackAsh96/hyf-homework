function modulesCurricula(){
const ul = document.createElement("ul");
const ul1 = document.createElement("ul");
const html = "HTML-CSS";
const cmdL = "CommandLine";
const jScript = "JavaScript1";
const git = "Git";


for(i=0;i<repos.length;i++){

  if(repos[i].name==html||repos[i].name==cmdL
  ||repos[i].name==jScript||repos[i].name==git){
        const li = document.createElement("li");
        const info = document.createElement("li");
        li.innerHTML = "This is the module: "+repos[i].name;
        info.innerHTML =
        "Num of stargazers: "+repos[i].stargazers_count+"</br>"
        +"Num of forks: "+repos[i].forks+"</br>"
        +"Type of language: "+repos[i].language+"</br>"
        +"Num of watchers: "+repos[i].watchers;
        ul1.appendChild(info);
        ul.appendChild(li);
                            }
                        }

document.getElementById("list_conteiner").appendChild(ul);
document.getElementById("list_conteiner").appendChild(ul1);
}
modulesCurricula();
