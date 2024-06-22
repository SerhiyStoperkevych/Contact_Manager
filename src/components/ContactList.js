import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../features/contactsSlice';

const ContactList = () => {
    const contacts = useSelector((state) => state.contacts);
    const dispatch = useDispatch();

    return (
        <ul>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    {contact.name} - {contact.phone}
                    <button onClick={() => dispatch(removeContact(contact.id))}>
                        Remove
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
