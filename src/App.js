import React, {useState} from 'react'
import './App.css';
import FormToDo from './components/FormToDo';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return(
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header'>
              <h5 className='card-title'>To Do List</h5>
            </div>
            <div className='card-body'>
              <FormToDo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
