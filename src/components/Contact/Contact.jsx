import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import css from "../Contact/Contact.module.css";

const Contact = ({ id, name, number, deleteContact }) => (
  <div className={css.contact}>
    <div className={css.item}>
      <div className={css.text}>
        <IoMdContact className={css.icon} /> {name}
      </div>
      <div className={css.text}>
        <FaPhone className={css.icon} /> {number}
      </div>
    </div>
    <button className={css.button} onClick={() => deleteContact(id)}>
      Delete
    </button>
  </div>
);

export default Contact;
