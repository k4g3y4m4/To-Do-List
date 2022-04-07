import react, {useState} from 'react'
import ToDo from './ToDo'

const FormToDo = (props) =>{

    const [newToDo, setNewToDo] = useState("")
    const [error, setError] = useState("")
    const [ToDos, setToDos] = useState([])


    //form to add ToDo
    const handleSubmit = (e) =>{
        e.preventDefault()

        if(newToDo.trim() === ""){
            setError("Please enter a valid ToDo")
            return
        }

        const ToDoItem = {
            text: newToDo,
            complete: false
        }

        setToDos([...ToDos, ToDoItem])
        setNewToDo("")
    }

    //input to add ToDo
    const handleChange = (e) =>{
        if(e.target.value.trim() === ""){
            setError("Please enter a valid ToDo")
        }else{
            setError("")
        }

        setNewToDo(e.target.value)
    }

    return(
        <div>
            <form className='row' onSubmit={handleSubmit}>
                <div className='col'>
                    
                    <input type="text" className={`form-control ${error ? 'is-invalid' : '' }`} placeholder="Add ToDo" value={newToDo} onChange={handleChange}/>
                    <div className='invalid-feedback'>{error}</div>
                </div>
                <div className='col-auto'>
                    <button className='btn btn-primary'>Add</button>
                </div>
            </form>
            <div className="row py-2">
                <div className="col">
                    <ul className='list-group'>
                        {ToDos.map((todo, index) =>{
                            return(
                                <li className='list-group-item' key={index} id={`ToDoItem-${index}`}>
                                    <ToDo ToDoText={todo.text}  ToDoIndex={index} className="py-5"/>
                                </li>
                            )
                        }
                        )}
                    </ul>
                </div>
            </div>

        
        </div>
    )
}


export default FormToDo;
