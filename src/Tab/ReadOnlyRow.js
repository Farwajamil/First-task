const ReadOnlyRow = ({ contact, handleEditClick , del }) => {
  return (
    <tr >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.marks}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >Edit</button>
        <button type='button' onClick={()=>del(contact.id)}>Delete</button>
      </td>
    </tr>
  );
};
export default ReadOnlyRow;
