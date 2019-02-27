const fs = require('fs');
const mysql = require('mysql');

const config = JSON.parse(fs.readFileSync("config-secret.json"))

const connection = mysql.createConnection({
   host: config.host,
   user: config.user,
   password: config.password,
   port: config.port,
   database: config.database
});

connection.connect((err)=>{
  if(err){
  throw 'Reject connection with mySQL database'
}
});
//--------------SETTING FUNCTIONS---------------
//------------------exercise 1------------------
const findDatabaseTasks = function(searchText) {
  connection.query('SELECT * FROM user'+
  '\nJOIN user_task ON user.id=user_task.user_id'+
  '\nJOIN task ON user_task.task_id=task.id WHERE task.title LIKE ? ',
  [searchText],(err,results,fields)=>{
    if(err){
      throw 'not working'
    }
    console.log(results);
  });
}
//------------------exercise 2------------------
const findUserTasks = function(userName) {
  connection.query('SELECT * FROM user'+
  '\nJOIN user_task ON user.id=user_task.user_id'+
  '\nJOIN task ON user_task.task_id=task.id WHERE user.name LIKE ?',
  [userName],(err,results,fields)=>{
  if(err){
    throw 'nor working'
  }
  console.log(results);
});
}
//------------------exercise 3------------------
const findUserTasksStatus = function(userName) {
  connection.query('SELECT status.name,user.name,task.title'+
  '\nFROM user JOIN user_task ON user.id=user_task.user_id'+
  '\nJOIN task ON user_task.task_id=task.id JOIN status ON task.status_id=status.id'+
  '\nWHERE user.name LIKE ?',[userName],(err,results,fileds)=>{
    if(err){
      throw 'not working'
    }
    console.log(results);
  });
}
//------------------exercise 4------------------
const addNewTask = function(title, description, created, updated, dueDate, statusID) {
  connection.query('INSERT INTO task (title, description, created, updated, due_date, status_id)'+
  '\nvalues (?, ?, ?, ?, ?, ?)',
  [title, description, created, updated, dueDate, statusID],
  (err,results,fields)=>{
    if(err){
      throw 'not working'
    }
    console.log(results);
  });
}
//------------------exercise 5------------------
const changeTaskTitle = function(taskID, newTitle) {
connection.query('UPDATE task SET title = ? WHERE id=?',
[newTitle,taskID],(err,results,fields)=>{
  if(err){
    throw 'not working'
  }
  console.log(results);
});
}
//------------------exercise 6------------------
const changeTaskDueDate = function(taskID, newDueDate) {
  connection.query('UPDATE task SET due_date = ? WHERE id=?',
  [newDueDate,taskID],(err,results,fields)=>{
    if(err){
      throw 'not working'
    }
    console.log(results);
  });
}
//------------------exercise 7------------------
const changeTaskStatus = function(taskID, newStatus) {
  connection.query('UPDATE task SET status_id = ? WHERE id=?',
  [newStatus,taskID],(err,results,fields)=>{
    if(err){
      throw 'not working'
    }
    console.log(results);
  });
}
//------------------exercise 8------------------
const markTaskAsCompleted = function(taskID) {
  connection.query('UPDATE task SET status_id=3 WHERE id= ?',
  [taskID],(err,results,fileds)=>{
    if(err){
      throw 'There is an error';
    }
    console.log(results);
  });
 }
 //------------------exercise 9------------------
const deleteTask = function(taskID) {
  connection.query('DELETE FROM task WHERE id=?',
  [taskID],(err,results,fields)=>{
    if(err){
      throw 'not working'
    }
    console.log(results);
  });
}
//------------------exercise 10-----------------
const deleteUser = function(userName){
  connection.query('DELETE FROM task WHERE id=?',
  [userName],(err,results,fields)=>{
    if(err){
      throw 'not working'
    }
    console.log(results);
  });
}

//---------------CALLED FUNCTIONS------------------
findDatabaseTasks('%database%');
findUserTasks('%donald%duck%');
findUserTasksStatus('%Pavel%');
addNewTask('Make React project', 'Title says it all.', new Date('2017-10-08 17:31:16'), new Date('2017-10-08 17:31:16'), null, 2);
changeTaskTitle(3,'Hello from Zendesk');
changeTaskDueDate(37,new Date('2017-10-08 17:31:16'));
changeTaskStatus(4,1);
markTaskAsCompleted(25);
deleteTask(1);
deleteUser(22);
connection.end();
