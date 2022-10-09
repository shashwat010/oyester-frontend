import React from 'react'

const NoteItem = (props) => {
    const delNote=async (id)=>{
        const response = await fetch(`https://oyester-backend.herokuapp.com/task/deletetask/:${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzNDI4MWM0YmU3ODhiYTRiMDU5YTk1NiIsIm5hbWUiOiJzaGFzaHdhdCIsImVtYWlsIjoiamFpbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMSRGRkhoMUVlbUtNUnhWbGdwUXpVbkFPSE1jLmJpNWhZQUVVOS5YZUo1UE1mYmhORmc1MEdSVyIsInBob25lIjo5ODIxNDg4NDYyLCJfX3YiOjB9LCJpYXQiOjE2NjUzMTg2ODF9.P7NZ27yWLBmTgmktJWxG3pjTGfcLXsaU9HmVfT5hc5Q'
            },
        });
        console.log(response.body);
    }
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <p className="card-text">AssignedTo: {props.assignedTo}</p>
                <p className="card-text">Deadline: {props.deadline}</p>
                <i className="fas fa-trash-alt mx-2" onClick={delNote(props.id)}></i>
                <i className="fas fa-edit mx-2"></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
