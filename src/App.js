import React, {Component} from 'react';
import './App.css';

import Contacts from "./components/Contacts";


const contacts = [{
  id :0,
  firstName: "Барней",
  lastName: "Стинсовський",
  phone: "+380956319521",
  gender: "male"
}, {
  id :1,
  firstName: "Робін",
  lastName: "Щербатська",
  phone: "+380931460123",
  gender: "female"
}, {
  id :2,
  firstName: "Анонімний",
  lastName: "Анонімус",
  phone: "+380666666666",
  gender: "unknown"
}, {
  id :3,
  firstName: "Лілія",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female"
}, {
  id :4,
  firstName: "Маршен",
  lastName: "Еріксонян",
  phone: "+380739432123",
  gender: "male"
}, {
  id :5,
  firstName: "Теодор",
  lastName: "Мотсбес",
  phone: "+380956319521",
  gender: "male"
}];

function App() {

  return (
    <div className="App">
          <Contacts data={contacts}/>
    </div>
  );
}

export default App;

