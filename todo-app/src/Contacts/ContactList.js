import React, {} from 'react';

function ContactItem(props, index) {

    var fullName = props.contact.firstname+' '+props.contact.lastname;

    return (
                 <span>             
                     <div className={'text-gray-700 font-semibold'}>{fullName}</div>
                    <div className={'text-gray-700 font-semibold'}>{props.contact.email}</div>
                    <div className={'text-gray-700 font-semibold'}>{props.contact.comments}</div>
                 </span> 
    );
}

export default ContactItem;
