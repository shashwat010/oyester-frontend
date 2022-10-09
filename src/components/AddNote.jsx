import React,{useState} from 'react'

const AddNote = () => {
    const [note, setNote] = useState({title:"",desc:"",assignedTo:"",assignedBy:"",deadline:""})
    const handleClick=async (e)=>{
        e.preventDefault();
        const response = await fetch(`https://oyester-backend.herokuapp.com/task/addtask`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzNDI4MWM0YmU3ODhiYTRiMDU5YTk1NiIsIm5hbWUiOiJzaGFzaHdhdCIsImVtYWlsIjoiamFpbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMSRGRkhoMUVlbUtNUnhWbGdwUXpVbkFPSE1jLmJpNWhZQUVVOS5YZUo1UE1mYmhORmc1MEdSVyIsInBob25lIjo5ODIxNDg4NDYyLCJfX3YiOjB9LCJpYXQiOjE2NjUzMTg2ODF9.P7NZ27yWLBmTgmktJWxG3pjTGfcLXsaU9HmVfT5hc5Q'
            },
            body: JSON.stringify({title:note.title,desc:note.desc,assignedTo:note.assignedTo,assignedBy:note.assignedBy,deadline:note.deadline})
        });
        setNote({title:"",desc:"",assignedTo:"",assignedBy:"",deadline:""})
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <div className="container my-3">
                <h3>Add a Note</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="title" value={note.title} onChange={onChange} minLength={3} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Description</label>
                        <input type="text" className="form-control" id="desc" name="desc" value={note.desc} onChange={onChange} minLength={5} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="assignedTo" className="form-label">Assigned To</label>
                        <input type="text" className="form-control" id="assignedTo" name="assignedTo" value={note.assignedTo} onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="assignedBy" className="form-label">Assigned By</label>
                        <input type="text" className="form-control" id="assignedBy" name="assignedBy" value={note.assignedBy} onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="deadline" className="form-label">Deadline</label>
                        <input type="text" className="form-control" id="deadline" name="deadline" value={note.deadline} onChange={onChange}/>
                    </div>
                    <button disabled={note.title.length<3 || note.desc.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Task</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote
