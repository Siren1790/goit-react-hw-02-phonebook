export const ContactList = ({ contacts, onDelete}) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>Name: {name} -</p>
          <p>{number}</p>
          <button type="button" onClick={()=> onDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
