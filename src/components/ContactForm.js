import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../features/contactsSlice';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContact({ id: Date.now(), name, phone }));
        setName('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">Add Contact</button>
        </form>
    );
};

export default ContactForm;
