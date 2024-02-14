import Contact from './Contact';
const listItemStyles = {
  display: "flex",
  gap: 30,
}
const ContactList = ({ contacts }) => {
  return (
    <ul style={listItemStyles}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
