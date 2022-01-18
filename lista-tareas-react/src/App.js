// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {

const [tareas, actualizarTareas] = useState([])
const [contador, actualizarContador]=useState(0);



function anyadirTarea(nuevaTarea){

actualizarTareas([...tareas,nuevaTarea]);
actualizarContador(contador+1);
}


function eliminarTarea(tarea){

  let index=tareas.indexOf(tarea);
  tareas.splice(index,1);
  actualizarTareas([...tareas]);
}
function EditarTarea(tarea){
  let index=tareas.indexOf(tarea);
  let editada=prompt("Edita esta tarea");
  tareas.splice(index,1);
  actualizarTareas([editada]);
}
  return (
    <div className="App">
      <h1>Lista de tareas Ejemplo React</h1>
      <p>Has añadido {contador} tareas en total... Animo!!</p>
      <input type="text" id='nuevaTarea'></input>
      <button onClick={()=>anyadirTarea(document.getElementById('nuevaTarea').value)}>añadir tarea</button>
      {
        tareas.map(tarea=>
          <div className="tarea">
            <li key={tarea}>{tarea}</li>
            <p onClick={()=>eliminarTarea(tarea)}>eliminar</p>
            <p onClick={()=>EditarTarea(tarea)}>Modificar</p>
            </div>
        )
      }
      <p>{contador-tareas.length} de {contador} tareas terminadas</p>
    </div>
  );
}

export default App;
