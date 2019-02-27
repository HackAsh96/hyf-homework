import express from 'express';
import bodyParses from 'body-parser';
import ContactList from './contactList.js';
const app = express();
import fs from 'fs';
const my_contact_list= new ContactList();

//Add contacts
my_contact_list.add({
  name:'Badr',
  phone: 1234567890,
  timestamp: new Date()
});

my_contact_list.add({
  name:'Marco',
  phone: 1234567890,
  timestamp: new Date()
});
my_contact_list.add({
  name:'Bdr',
  phone: 1234567890,
  timestamp: new Date()
});

my_contact_list.add({
  name:'Mrco',
  phone: 1234567890,
  timestamp: new Date()
});
my_contact_list.add({
  name:'Bar',
  phone: 1234567890,
  timestamp: new Date()
});

my_contact_list.add({
  name:'Maco',
  phone: 1234567890,
  timestamp: new Date()
});
my_contact_list.add({
  name:'Patrick',
  phone: 1234567890,
  timestamp: new Date()
});
//initialize the PUBLIC folder
app.use(express.static(__dirname+ '/public'));
app.use(bodyParses.json());



//Set the new CONTACT file as JSON by using the FILE SYSTEM
let newFileContacts=JSON.stringify(my_contact_list.getList(),null,2);
fs.writeFileSync('./contactsJSON.json',newFileContacts);

//Get the contacts with the paramethers query
app.get('/contacts', function (req, res) {
//sort by date TO FINISH
/*--------------------------------------
The sort should be done between all the conbination,
here we have 8 conbinations to try in order to satisfy all three the params.
That will be a little bit longer, we have three case:

* 0 is 'not used'
  1 is 'used'

BYNAME        LIMIT            SORT
  0             0                0
  0             0                1
  0             1                0
  0             1                1
  1             0                0
  1             0                1
  1             1                0
  1             1                1

Another point to take care about is that 'new Date()' refresh the day everytime you refresh the app,
so that doesn't allowed you to add and remove a contact, in other word the only way is to use 'POSTMAN'.
-----------------------------------------*/
  if("sort" in req.query){
    if(req.query.sort=="mr"){
      const sorted=my_contact_list.getList().sort((pick, compare) => {
  let objPicked = pick.timestamp;
  let objCompared = compare.timestamp;
  if(objPicked > objCompared){
    return -1;
  }
  else {return 1;}
});
res.send(sorted);
  }
  }
  //searchBy method for name and limitation on 'search_result'
  else if(req.query.name && req.query.name.length > 0){
    const search_result = my_contact_list.searchBy("name", req.query.name);
    if("limit" in req.query){

      /*'in' is a object proprety , it can be used somehow like 'hasOwnProperty'.
      it is not the same , but it can be used in this example to make it short.
      We are asking the server to check if the string that we write in the 'query' is part of the query itself when we write it.
      It's like a double checking from the developer.*/

      const limtedList=search_result.slice(0,req.query.limit);
      res.send(limtedList);
    }
    else {
      res.send(search_result);
    }
}

  // throw an error
  else {
    throw "illigal query";
  }
});
app.get('/all-contacts',function (req,res){
  res.send(my_contact_list.getList());
});
//get contacts by id of object
app.get('/contacts/:id', function (req, res) {
  res.send(my_contact_list.getList()[req.params.id]);
});

//Create a contact 'POSTMAN application'
app.post('/contacts', function (req, res) {
  console.log('req.body', req.body);
  my_contact_list.add(req.body);
  res.send(my_contact_list.getList());
});

//delete contact by name using the 'remove' method on CONTACTLIST class
app.delete('/contacts/:name', function(req, res){
  my_contact_list.remove(req.params.name);
  res.send(my_contact_list.getList());

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
