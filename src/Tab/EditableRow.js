function EditableRow({editformdata ,handleEditformchange })
{
    
 

    return(
        <tr>
       <td> 
           <input type='text' name ='name' value={editformdata.name} onChange={handleEditformchange}/>
        </td>
       <td>  
           <input type='email' name ='email' value={editformdata.email} onChange={handleEditformchange}/>
        </td>
       <td> 
           <input type='marks' name ='marks' value={editformdata.marks} onChange={handleEditformchange}/>
        </td>
        <td>
            <button type='submit' >Save</button>
        </td>
        </tr>
    );
}
export default EditableRow;