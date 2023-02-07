import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskCard({ task  }) {
    
    const{deleteTask} = useContext(TaskContext)
    
    return(
        <div className ="bg-gray-500 text-white p-4 rounded-md" > 
            <h1 className="text-xl front-bold capitalize">{task.title}</h1>
            <p className="text-gray-200 text-sm py-2 capitalize ">{task.description}</p>
            <button
             className="bg-red-400 px-3 py-1 rounded-md mt-5 hover:bg-red-600"
              onClick={() => deleteTask(task.id)}>
                Eliminar Tarea
            </button>
                
        </div>

    )
    }

export default TaskCard