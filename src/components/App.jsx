import React, { Component } from 'react';
import { ContactForm, ContactList, Filter } from './';
import { nanoid } from 'nanoid';

class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = event => {
    event.preventDefault();
    const form = event.target;
    const obj = {
      id: nanoid(),
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    this.setState(prevState => {
      prevState.contacts.push(obj);
      return { contacts: [...prevState.contacts] };
    });
    form.reset();
  };
  filter = evt => {};

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state} />
        <ContactList />
      </div>
    );
  }
}
export const App = () => {
  return <PhoneBook />;
};
