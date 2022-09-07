import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

//rcf

const ContactComponent = ( { contact } ) => {
    return (
        <div>
            <div>
                <h1>Nombre: { contact.name }</h1>
                <h2>Apellido: { contact.last_name }</h2>

                <h2>Email: { contact.email }</h2>

                <h3>{contact.connected ? 'Contacto En Línea': 'Contacto No Disponible' }</h3>
            </div>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
