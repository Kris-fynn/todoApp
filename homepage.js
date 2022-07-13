import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle,faPen, fatrashCan } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import UpdateForm from './UpdateForm.jsx';
import AddTaskForm from './AddTaskForm.jsx';
import ToDo from './ToDo.jsx';
function Homepage() {
  // Tasks (ToDo List) State
  //////////////////////////
  const [toDo, setToDo] = useState([
    {id: 1, title: 'Task 1', status: false},
    {id: 2, title: 'Task 2', status: false}
  ])
  // Temp State
  /////////////
  const [newTask, setNewTask] = useState('')
  const [updateData, setUpdateData] = useState('')
  // Add task
  ///////////
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1
      // let newEntry = { id: num, title: newTask, status: false }
      // setToDo([...toDo, newEntry])
      // refactored
      setToDo([
        ...toDo,
        { id: num, title: newTask, status: false }
      ])
      setNewTask('')
    }
  }
  // Delete task
  //////////////
  const deleteTask = (id) => {
    // let newTasks = toDo.filter( task => task.id !== id)
    // setToDo(newTasks)
    // refactored
    setToDo(toDo.filter(task => task.id !== id))
  }
  // Mark task as done or completed
  /////////////////////////////////
  const markDone = (id) => {
    // let newTask = toDo.map( task => {
    //   if( task.id === id ) {
    //     return ({ ...task, status: !task.status })
    //   }
    //   return task
    // })
    // setToDo(newTask)
    // refactored
    setToDo(toDo.map(
      task => task.id === id
      ? ({ ...task, status: !task.status })
      : (task)
    ))
  }
  // Cancel update
  ////////////////
  const cancelUpdate = () => {
    setUpdateData('')
  }
  // Change task for update
  /////////////////////////
  const changeHolder = (e) => {
    // let newEntry = {
    //   id: updateData.id,
    //   title: e.target.value,
    //   status: updateData.status ? true : false
    // }
    // setUpdateData(newEntry)
    // refactored
    setUpdateData({...updateData, title: e.target.value})
  }
  // Update task
  //////////////
  const updateTask = () => {
    // let filterRecords = [...toDo].filter( task => task.id !== updateData.id )
    // let updatedObject = [...filterRecords, updateData]
    // setToDo(updatedObject)
    // refactored
    let removeOldRecord = [...toDo].filter(task => task.id !== updateData.id)
    setToDo([
      ...removeOldRecord,
      updateData
    ])
    setUpdateData('')
    }
  return (
    <div className="container home">
       <br/><br/>
       <h1>Todo List Appliction</h1>
       {updateData && updateData ? (
      <UpdateForm
        updateData={updateData}
        changeHolder={changeHolder}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
      />
    ) : (
      <AddTaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
    )}
    {toDo && toDo.length ? '' : 'No Tasks...'}
    <ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
    />
    </div>
  );
}
export default Homepage

import React, { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Layout from './components/Layout'
import Lists from './components/Lists'

function Homepage() {
  const [todo, setTodo] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    console.log('Submit!');
  };
  return (
    <Layout>
      <Header />
      <Form
        value={todo}
        submit={submitHandler}
        onChange={(e) => setTodo(e.target.value)} />
      <hr className='border-primary' />
      <Lists />
    </Layout>
  );
}

export default  Homepage