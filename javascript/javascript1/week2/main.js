// Step 3: Javascript warmup part two
const timeSetup = {
  time:12,
}
function objSetup(){
  return timeSetup;
}
let timeObject = objSetup(timeSetup);
console.log(timeObject);
//--------------------------------------
const myArray=[{color:"red"},{color:"purple"},{color:"black"}];
function arraySetup(color1,color2,color3){
  myArray[0].color = color1;
  myArray[1].color = color2;
  myArray[2].color = color3;
  return myArray;
}

let colorObject = arraySetup("blue","yellow","green");
console.log(colorObject);

for(i=0; i<myArray.length;i++ ){
  console.log(myArray[i].color);
}
//----------------------------------------------
let todayIs = "Sunday";
const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const daysLeft = 9;
let meetingDay;

for (i=0;i<daysLeft;i++){
  if(weekDays[i]==todayIs){
    meetingDay=daysLeft-weekDays.length;
    console.log("Today is: "+todayIs);
    console.log("How many days to meet: "+daysLeft);
    console.log("We are meeting on: "+weekDays[meetingDay]);
  }
}
//Step 3: Smart-ease - Goes Global!
// Save notes
const notes = [];
function addNote(note,noteId){
  notes.push({note,noteId});
  return notes;
}
addNote("The local app",1);
addNote("Design the app",2);
addNote("My projects",3);

console.log(notes);
// Get a note
function getNoteFromId(id){
  for(i=0;i<notes.length;i++){
    if(id==notes[i-1].noteId){
      console.log(notes[i-1].note);
      break;
    }
    else {
      console.log("This ID number: "+id+" it is not available!");
    }
  }
}
getNoteFromId(3);
// Read all notes
function showAllNotes(){
  for(i=0;i<notes.length;i++){
    console.log("The note with id: "+notes[i].noteId+" has the following note text: "+notes[i].note);
  }
}
showAllNotes();
// CactusIO-interactive (Smart phone usage app)
// adding an activity
let activities=[];
function addActivity(date,activity,duration){
  activities.push({date,activity,duration});
  return activities;
}
addActivity("1/4/18","Youtube",10);
addActivity("2/4/18","Games",205);
addActivity("3/4/18","JavaScript",34);
addActivity("4/4/18","Meditation",42);
console.log(activities);
// show my status
let minuteStorage = 0;//Should not be inside the function otherwise it will not be global
function showStatus(activities){
  let numOfActivities= activities.length;
  if(numOfActivities==0){
    console.log("There is no activity yet!");
    console.log("Add some activities before calling showStatus");
  }
  else{
  for(i=0;i<numOfActivities;i++){
      minuteStorage+=activities[i].duration;
  }
  console.log(minuteStorage+" min");
}
}
showStatus(activities);
//Usage limit
function usageLimit(usageDuration){
  let limit=usageDuration-minuteStorage;
  for(i=0;i<activities.length;i++){
    if(minuteStorage>=usageDuration){
      console.log("You have reached your limit, no more smartphoning for you!");
    }
    else {
      console.log("You still have: "+limit+" min to use");
    }
  }
}
usageLimit(100);//change this to see the difference
// extra feature
//------------------------------LATER-----
// Step 4: Rover the Robot (Optional)
