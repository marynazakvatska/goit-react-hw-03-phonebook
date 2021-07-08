import React from 'react';
import './Phonebook.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactLIst/ContactList';
import shortid from 'shortid';
import Filter from '../Filter/Filter';
import s from './Phonebook.module.css';


class Phonebook extends React.Component {
  state = {
      contacts: [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
       filter: ''

    }

    deleteContact = contactId => {
        this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
}

     sameInclude = (contact, contacts) =>
    contacts.find(cont =>
      cont.name.toLocaleLowerCase().includes(contact.name.toLocaleLowerCase()) ,
    );
    
    

    addContact = e => {
        const { contacts } = this.state;
        console.log({ contacts });
        const contact = {
       id: shortid.generate(), 
            name: e.name,
            number: e.number,
        }
       
        this.sameInclude(contact, contacts)
      ? alert(`${contact.name} is already in your list`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }))
    }

    changeFilter = e => {
        this.setState({filter: e.currentTarget.value})
}
 
    getVisibleClients = () => {
        const { contacts, filter } = this.state;
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

  }
  
  componentDidMount() {
    console.log('App componentDidMount');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts})
    }
    

  }
    
  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');
    if (this.state.contacts !== prevState.contacts) {
      console.log('obnovlenie contacts');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
 }
  }
  
  
  render() {
      const {  filter } = this.state;

      
      const visibleContacts = this.getVisibleClients();
    return (
        <div className={s.section}>
            <h1 className={s.title}>Phonebook</h1>
            <ContactForm onSubmit={ this.addContact}/>

            <h2 className={s.title_contact}>Contacts</h2>
             <Filter className={s.filter_label} value={filter} onChange={this.changeFilter} />
            
            <ContactList contacts={visibleContacts} onDeleteContact={ this.deleteContact}/>
            


      </div>
    );
  }
}

export default Phonebook;
