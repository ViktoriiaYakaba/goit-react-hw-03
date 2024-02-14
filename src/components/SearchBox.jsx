const inputStyles = {
  border: "1px solid DeepSkyBlue",
  borderRadius: 5,
  width: 275,
  height: 30,
  paddingLeft: 20,
  marginLeft: 40,
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