import Contact from "../Contact/Contact"


const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <Contact
        key={id}
        id={id}
        name={name}
        number={number}
        deleteContact={deleteContact}
      />
    ))}
  </ul>
);

export default ContactList;
