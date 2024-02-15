import Contact from './Contact';

const listItemStyles = {
  display: "flex",
  flexWrap: "wrap",
  gap: 25,
}
const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul style={listItemStyles}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} deleteContact={deleteContact}/>
      ))}
    </ul>
  );
};

export default ContactList;

