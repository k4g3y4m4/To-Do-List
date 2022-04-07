import React, {useState} from 'react'

const ToDo = (props) =>{
  
    const ToDoText = props.ToDoText
    const ToDoIndex = props.ToDoIndex


    //ischecked and isdeleted
    const [isChecked, setIsChecked] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)

    const handleChecked = (e) =>{
      var ToDoText = document.getElementById('ToDoText-'+ToDoIndex)        
      if(isChecked === true){
            setIsChecked(false)
            ToDoText.style.textDecoration = "none"  
        }else{
            setIsChecked(true)
            ToDoText.style.textDecoration = "line-through"   
        }
    }

    const handleDeleted = (e) =>{
        var ToDoItem = document.getElementById('ToDoItem-'+ToDoIndex)
        if(isDeleted === false){
            setIsDeleted(false)
            ToDoItem.remove()  
        }
        
    }
    
    return(
        <div className='row'>
            <div className='col-1'>
                <input type="checkbox" checked={isChecked} onChange={handleChecked} />
            </div>
            <div className='col-auto' id={`ToDoText-${ToDoIndex}`}>
                <p>{ToDoText}</p>
            </div>
            <div className='col-2'>
                <button className='btn btn-danger' onClick={handleDeleted}>Delete</button>
            </div>
        </div>
    )
}

export default ToDo