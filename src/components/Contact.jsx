import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const listStyles = {
    border: "1px solid #ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: " #fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    maxHeight: "100%",
    width: 230,
    overflow: "hidden",
};

const btnStyles = {
    backgroundColor: "MediumSlateBlue",
    border: "none",
    borderRadius: 5,
    color: "white",
    width: 80,
    height: 25,
};


const Contact = ({ contact, deleteContact }) => {
    const handleDeleteClick = () => {
    deleteContact(contact.id);
  };

    return (
        <li style={listStyles}>
            <p><FaUser size="11px" />  {contact.name}</p>
            <p><FaPhoneAlt size="11px"/>  {contact.number}</p>
            <button style={btnStyles} onClick={handleDeleteClick}>Delete</button>
        </li>
    );
};
export default Contact;


