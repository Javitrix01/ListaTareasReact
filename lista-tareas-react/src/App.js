import {useState} from 'react';
import './App.css';

function App() {
  const [tareas,actualizarTareas]=useState([]);
  const [contador,actualizarContador]=useState(0);
  function anyadirTarea(nuevaTarea){
    actualizarTareas([...tareas,nuevaTarea]);
  }
  function eliminarTarea(tarea){
    let index=tareas.indexOf(tarea);
    tareas.splice(index,1);
    actualizarTareas([...tareas]);
  }
  return (
    <div className="App">
       <h1>Lista de tareas (Ejemplo React)</h1>  
       <input type="text" id='nuevaTarea'></input>
       <button onClick={()=>anyadirTarea(document.getElementById('nuevaTarea').value)}>añadir tarea </button>
       {
         tareas.map(tarea=>
          <div className='tarea'>
            <li key={tarea}>{tarea}</li>
            <p onClick={()=>eliminarTarea(tarea)}>eliminar</p>
          </div> )
       }
    </div>
  )
}

export default App;
