const watchFirstEpisode = function() {
  // function get called by watchBreakingBad(), " Watch first episode" get shown,
  //"No more for today" get shown after the function get called inside watchBreakingBad()
  console.log('Watch first episode');
};

const watchBreakingBad = function() {
  console.log('Watching Breaking bad');
  // function get called by finishMondayEvening()
  //"Watching Breaking Bad" get shown, then the function call watchFirstEpisode(),
  watchFirstEpisode();
  console.log('No more for today');
};

const goForARun = function() {
  console.log('Im running! look at me!');
}

const helpStudentsWithHomework = function() {
  console.log('Help help help');
}

function finishMondayEvening(functionThatIsParameter) {
  functionThatIsParameter();
  // shows the parameter in this case is the function watchBreakingBad() called
  goForARun();
  // get executed after functionThatIsParameter() has done. Shows "Im running! look at me !"
  helpStudentsWithHomework();
  // get executed after goForARun() has done. Shows "Help help help"
  console.log('done for today')
}

// This is the first stack to get called
finishMondayEvening(watchBreakingBad);
//it calls the function watchBreakingBad() Last stack
/* when this last function get called and settled by the parameter,
the inner functions get executed after functionThatIsParameter() have done,
so have excecuted all the functions above , that called in the first time by
finishMondayEvening()*/


//STACK OVERVIEW
/*
finishMondayEvening(watchBreakingBad)
--->watchBreakingBad--->watchFirstEpisode
goForARun()
helpStudentsWithHomework()
*/
