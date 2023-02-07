import { useState,useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm({}) {
const [title,setTitle]=useState("");
const [description,setDescription]=useState("");
const { createTask } = useContext(TaskContext)


const handleSubmit=(e) =>{
    e.preventDefault();
   createTask({
    title,
    description
});
setTitle('')
setDescription('')
}
    return(
        <div className=" max-w-md mx-auto  ">
            <form onSubmit={handleSubmit} className=" bg-zinc-700 p-10 mb-5">
                <h1 className=" text-2xl font-medium text-white mb-3"> Crea tu Tarea</h1>
            <input placeholder="Escribe tu tarea" 
            onChange={(e)=>{setTitle(e.target.value)}}
            value={title}
            className="bg-slate-300 p-3 w-full mb-2"
            autoFocus
            />
            <textarea
            placeholder="Escribe la descripcion de la tarea"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="bg-slate-300 p-3 w-full mb-2"

            >
            </textarea>
            <button className=" bg-sky-600 px-3 py-1 rounded-md mt-5 hover:bg-sky-800">
                Guardar
            </button>          
        </form>
        </div>
  
        
  
)
}
export default TaskForm;