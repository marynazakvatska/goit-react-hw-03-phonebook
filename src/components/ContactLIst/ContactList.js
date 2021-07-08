import React from 'react';
import './ContactList.module.css';
import PropTypes from "prop-types";
import s from "./ContactList.module.css";


const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactItem}>
          <p className={s.contactDescription}>
        
            {name}: {number}
          </p>
          <button
            className={s.deleteBtn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};


ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
      onDeleteContact : PropTypes.func.isRequired,
};

export default ContactList;
