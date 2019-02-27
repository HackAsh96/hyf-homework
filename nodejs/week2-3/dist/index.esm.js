import http from 'http';
import fs from 'fs';

class ContactList {
  /**
   * Simple Contact List class
   */
  constructor() {
    this._list = [];
    this._keyList=[];
    this._valueList=[];
  }

  /**
   * Check if the new_contact object is a valid new contact
   * Validates, if has the name and phone keys, check if the name is a string
   * and the phone is a number and it has at least 5 digits
   * @param {name:string phone:nubmer} new_contact
   */
  // isContactValid(new_contact) {
  //   if (new_contact.hasOwnProperty("name")&&new_contact.hasOwnProperty("phone")){
  //     if (new_contact.name!==String(new_contact.name)||new_contact.name.trim().length===0){
  //       throw new Error(`The contact name ${new_contact.name} is not valid`)}
  //
  //       if(new_contact.phone!==Number(new_contact.phone)||new_contact.phone.toString().length<5){
  //       throw new Error(`The contact phone ${new_contact.phone} is not valid`)}
  //       }
  //       else {throw new Error("the contact needs to have a name and a phone")}
  // }

  /**
   * Method for add a contact to the list
   * @param { name: String, phone: number} contact
   */
  add(new_contact) {
    try {
        const myClass = new ContactItem(new_contact.name,new_contact.phone);
        const checked = this._list.find( obj=> obj.name === new_contact.name);
        if (checked){console.log("\nA contact with the name " + new_contact.name + " already exists");}
        else {this._list.push(new_contact);}
      }
    catch (error) {console.log(error.message);}
}

  remove(name) {
      this._list.some(obj=>{
         if(obj.name === name) { this._list.splice(this._list.indexOf(obj),1);}
         else {console.log("\nNo contact");}
       });
    }

  searchBy(key,value) {
    return this._list.filter(obj=>{
      if(obj.hasOwnProperty(key)){
        if(obj[key].toString().toLowerCase().startsWith(value.toString().toLowerCase())){
          return obj;
        }
      }
      else{
        throw new Error(`This key ${key} does not exist`);
      }
    })
  }

  getList() {
    return this._list
  }
  // getValue(){
  //   console.log("\nSearched by VALUE:");
  //   return this._valueList
  // }
  // getKeys(){
  //   console.log("\nSearched by KEY:");
  //   return this._keyList
  // }
}

class ContactItem {
  constructor(name, phone) {
    if (name !== String(name)) {
      throw new Error("\n"+name+" must be a string");
    }
    if (phone !== Number(phone)) {
      throw new Error("\n"+phone+" must be a number");
    }
    if (phone.toString().length !== 10) {
        throw new Error("\n"+name+"'s number doesn't respect the phones paramethers (at least 10 digit)");
    }
    this.name = name;
    this.phone = phone;
  }
}

const index = fs.readFileSync(__dirname+'/index.html');
const about = fs.readFileSync(__dirname+'/about.html');
const error = fs.readFileSync(__dirname+'/error.html');

const my_contact_list = new ContactList();

my_contact_list.add({
  name: "marco",
  phone: 4283818890
});

my_contact_list.add({
  name: "frank",
  phone: 4283817790
});

http.createServer(function (req, res) {
  console.log('url',req.url);
  console.log('method\n',req.method);
  const route = req.method + ' '+ req.url;
  //console.log('route', route);
  if(route.startsWith('GET /api/contacts/')){
    const contact_index=parseInt(route.split('GET /api/contacts/')[1]);
    const contact=my_contact_list.getList()[contact_index];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(contact));
    return;
  }
  switch (route) {
        case 'GET /':
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(index);
        break;

    case 'GET /about':
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(about);
        break;

    case 'GET /api/contacts':
        const all_contacts = my_contact_list.getList();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(all_contacts));
        break;
    // case `GET /api/search/${n}`:
    //     const n =indexOf(my_contact_list.getList()[n]);
    default:
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(error);
  }
}).listen(9615);
