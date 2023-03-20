import './App.css';
import Display from './components/Display';
import Form from './components/Form';
import { useState } from 'react';
function App() {
  const [boxes, setBoxes]=useState([{color:"red",status:true},{color:"blue", status:false},{color:"green", status:false}])
  const addBox= (newBox)=>{
    setBoxes([...boxes,newBox])
  }
  const updateBox=(id)=>{
    const newBoxes = [...boxes]
    newBoxes[id].status=!newBoxes[id].status
    setBoxes (newBoxes)
  }
  const deleteBox =(id)=>{
    const deletedBoxes=boxes.filter((box,index)=>{
      return id!==index
    })
    setBoxes(deletedBoxes)
  }
  return (
    <div className="App">
      <Form addBox= {addBox} />
      <Display boxes= {boxes} updateBox={updateBox} deleteBox={deleteBox}/>

    </div>
  );
}

export default App;

