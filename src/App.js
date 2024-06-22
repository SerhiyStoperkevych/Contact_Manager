import React from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <h1>Contact Manager</h1>
            <ContactForm />
            <ContactList />
        </div>
    );
};

export default App;
