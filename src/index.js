import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  // Тіло класу ContentEditor
}

const editor = new ContentEditor("mango@gmail.com");
const user = new User({
  email: "mango@mail.com",
});
console.log(editor); // { email: "mango@mail.com" }
console.log(editor.email); // "mango@mail.com"

console.log(user); // { email: "mango@mail.com" }
console.log(user.email.email); // "mango@mail.com"