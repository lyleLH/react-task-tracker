import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from "react"

import Tasks from './components/Tasks';
import Header from './components/Header';
import AddTask from './components/AddTask';

function App() {

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Doctor Appointment 2',
        day: 'Feb 5th at 2:30pm',
        reminder: true
      },
      {
        id: 3,
        text: 'Doctor Appointment 3',
        day: 'Feb 5th at 2:30pm',
        reminder: true
      },

    ])
  //Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    console.log('toggleReminder', id)
    setTasks(tasks.map((task) =>  task.id === id ? { ...task, reminder: !task.reminder } : task ))
  }
  //add task
const addTask = (task) => {
  console.log(task)
}

  return (
    <div className="container">
      <Header />
      <AddTask onAdd = {addTask} />

      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}
    </div>
  );
}


export default App;
