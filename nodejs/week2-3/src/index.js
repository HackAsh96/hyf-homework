import http from 'http';
import fs from 'fs'; //file system
import ContactList from "./contactList";
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
