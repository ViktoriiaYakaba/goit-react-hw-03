const inputStyles = {
  border: "1px solid #ccc",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  borderRadius: 8,
  paddingLeft: 20,
  width: 320,
  height: 40, 
}


const SearchBox = ({ value, onChange }) => {
  return (
      <input
          type="text"
          placeholder="Search contacts..."
          value={value}
          onChange={onChange}
          style={inputStyles}
        />
  );
};

export default SearchBox;