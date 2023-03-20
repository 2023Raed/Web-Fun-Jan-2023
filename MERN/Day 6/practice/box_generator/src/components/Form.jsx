import React, {useState} from 'react'

const Form = (props) => {
    const [box, setBox]=useState("")
    const handleForm=(e)=>{
        e.preventDefault()
        const newBox={color:box, status:false}
        props.addBox(newBox)
        setBox("")
    }
  return (
    <div>
        <form onSubmit={handleForm}>
        <label>Color: </label>
        <input onChange={(e)=>setBox(e.target.value) }value={box} />
        <button>Add</button>
        </form>
    </div>
  )
}

export default Form