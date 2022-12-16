
import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <Tareas/>

    </div>
  );
}
import { useState } from "react";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

function Tareas(){

    
    const [tarea,setTarea] = useState('GITS URL');
    
    const handlerTarea=(event)=>{
        setTarea(event.target.value)
          
        ;
    }
    
   // const ConsumeRest = (props) => {
      const [id, setId] = useState([]);
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    useEffect(() => {
    fetch("https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/?author_id=32", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error al agregar un nuevo item', error));
    }, []);


    const handlerSeleccion =(tarea)=>{

      var item ={
        tarea:tarea,
        cantidad:1
      }
      var listaTarea =tareaSeleccionados.filter((item)=>
      (item.tarea.id === tarea.id));
    
      if (listaTarea.length ===0){
        setTareaSeleccionados((listaActual)=>{
          const listaNueva =[...listaActual];
          listaNueva.push (item)
          return listaNueva;
        });
    
      }else {
        const listaNueva =tareaSeleccionados.map((listaViejaItem)
        =>listaViejaItem.tarea.id === tarea.id?{
          ...listaViejaItem,cantidad:listaViejaItem.cantidad+1}:listaViejaItem);
          setTareaSeleccionados(listaNueva);
      }
    }

 

    return <form onSubmit={(e)=>handlerSubmit(e)} >

       <center> <div style={{}}>
        <p style={{"color":"blue"}}>GIT GALERY</p>
      </div></center> 

     <center> <div><label  htmlFor="id"  ></label> 
        <input name="" value={tarea}
             onChange={(e)=>handlerSeleccion(e)} />
  
  <Button variant="primary" size="lg">
          Agregar
        </Button>{' '}
   
        </div></center>
        <div className="App">
  <ul>
  <div>
     
     <img src="https://media.tenor.com/VW4mxkYVimsAAAAM/avengers-end-game.gif" />
     <img src="https://media.tenor.com/fnoibaA3U9IAAAAM/homer-simpson-donut.gif" />
     <img src="https://media.tenor.com/zpaBBBdzydIAAAAM/goku-angry.gif" />
     <img src="https://media.tenor.com/SlwWjyc5EvAAAAAM/rickandmorty-yes.gif" />
   </div>

  </ul>
</div>

</form>
}

export default Tareas;