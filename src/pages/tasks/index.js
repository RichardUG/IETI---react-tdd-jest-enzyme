import React,{useEffect, useState} from 'react';

const Tasks=()=>{

    const [tasks, setTasks] = useState('');

    useEffect(()=>{
        fetch("http://localhost:8080/v1/tasks",{
            mode: 'cors',
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
            
        }).then(response=>response.json())
        .then(json => {
            console.log(json)
            setTasks(json);
        })
    },[])


    return(
        <div>
            <center>
                {tasks && tasks.map((item, idx)=> {
                    return <li key={idx}>
                    <p>id: {item.id}</p>
                    <p>name: {item.name}  </p>
                    <p>description: {item.description} </p>
                    <p>status: {item.status}</p>
                    <p>assignedTo: {item.assignedTo}</p>
                    <p>dueDate: {item.dueDate}</p>
                    <p>created: {item.created}</p>
                    </li>
                })}
            </center>
        </div>
    )
}
export default Tasks;