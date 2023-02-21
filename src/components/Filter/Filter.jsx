export const Filter = ({ filter }) => {
  return (
    <label>
      Filter contact by Name
      <input type="text" onChange={filter} />
    </label>
  );
};
