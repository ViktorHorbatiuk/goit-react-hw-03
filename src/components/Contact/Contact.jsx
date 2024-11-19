const Contact = ({ id, name, number, deleteContact }) => (
  <li>
    <p>
      {name}: {number}
    </p>
    <button onClick={() => deleteContact(id)}>Delete</button>
  </li>
);

export default Contact;
