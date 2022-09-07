import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contactComponent';


const ContactList = () => {

    const contactDefault = new Contact('Ariel', 'Messi', 'arielmessi@gmail.com', false);

    return (
        <div>
            <ContactComponent contact={contactDefault}></ContactComponent>
        </div>
    );
};





export default ContactList;
