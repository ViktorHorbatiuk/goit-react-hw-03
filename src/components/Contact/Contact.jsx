// import { IoMdContact } from "react-icons/io";
// import { FaPhone } from "react-icons/fa6";

const Contact = ({ id, name, number, deleteContact }) => (
  <li>
    <p>
      {name}: {number}
    </p>
    <button onClick={() => deleteContact(id)}>Delete</button>
  </li>
);





export default Contact;
