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
    let prevContacts = this.state.contacts.map(({ name }) =>
      name.toLocaleLowerCase()
    );
    let bool = prevContacts.includes(
      form.elements.name.value.toLocaleLowerCase()
    );
    if(bool){
      console.log(form.elements.name.value);
      form.reset();
      alert(`${form.elements.name.value} is already in contacts`);
      return
    }
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
  filter = evt => {
    const filterValue = evt.target.value;
    this.setState({ filter: filterValue.toLocaleLowerCase() });
  };

  delete = id => {
    console.log(id);
    this.setState(prevState => {
      let x = prevState.contacts.filter(contact => contact.id !== id);
      return { contacts: [...x] };
    });
  };

  render() {
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(this.state.filter)
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.filter} />
        <ContactList contacts={filterContacts} onDelete={this.delete} />
      </div>
    );
  }
}
export const App = () => {
  return <PhoneBook />;
};
