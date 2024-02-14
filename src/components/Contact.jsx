import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const listStyles = {
    listStyle: "none",
    border: "1px solid DeepSkyBlue",
    borderRadius: 5,
    padding: "0 15px 20px 30px",
    width: 250,
    height: 100,
    backgroundColor: "LightCyan",
};

const btnStyles = {
    backgroundColor: "DeepSkyBlue",
    border: "none",
    borderRadius: 5,
    color: "white",
    width: 80,
};


const Contact = ({ contact, deleteContact }) => {
    return (
        <li style={listStyles}>
            <p><FaUser  size="13px" />  {contact.name}</p>
            <p><FaPhoneAlt size="13px"/>  {contact.number}</p>
            <button style={btnStyles} onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
    );
};
export default Contact;

