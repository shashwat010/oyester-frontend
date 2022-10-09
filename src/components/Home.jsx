import React,{useState,useEffect} from 'react'
import NoteItem from './NoteItem'

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const fetchData = async () => {
        const response = await fetch(`https://oyester-backend.herokuapp.com/task/fetchtask`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzNDI4MWM0YmU3ODhiYTRiMDU5YTk1NiIsIm5hbWUiOiJzaGFzaHdhdCIsImVtYWlsIjoiamFpbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMSRGRkhoMUVlbUtNUnhWbGdwUXpVbkFPSE1jLmJpNWhZQUVVOS5YZUo1UE1mYmhORmc1MEdSVyIsInBob25lIjo5ODIxNDg4NDYyLCJfX3YiOjB9LCJpYXQiOjE2NjUzMTg2ODF9.P7NZ27yWLBmTgmktJWxG3pjTGfcLXsaU9HmVfT5hc5Q'
            },
        });
        const json = await response.json();
        console.log(json);
        setTasks(json);
    }

    useEffect(() => {
        fetchData();
    }, [])
    
    
    return (
        <div className="row my-3 mx-3">
                <h3>Tasks</h3>
                <div className='container mx-2'>
                {tasks.length===0 && 'No tasks Available'}
                </div>
                {tasks.map((task) => {
                    return <NoteItem id={task._id} title={task.title} desc={task.desc} assignedTo={task.assignedTo} deadline={task.deadline}/> 
                })}
            </div>
    )
}

export default Home
