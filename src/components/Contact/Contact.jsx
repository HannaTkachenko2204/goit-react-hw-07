import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  // const deleteContact = (id) => {
  //   setContacts((contacts) => contacts.filter((contact) => contact.id !== id));
  // };

  const handleClickDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.item}>
      <div>
        <p>
          <FaUser />
          {name}
        </p>
        <p>
          <MdLocalPhone />
          {number}
        </p>
      </div>
      <button onClick={handleClickDelete}>Delete</button>
    </div>
  );
};

export default Contact;
