import React from 'react'

const Display = (props) => {
  return (
    <div>
        {/* <h2>
            {JSON.stringify(props)}
        </h2> */}
            {
                props.boxes.map((box,id)=>{
                    return(
                        <div style={{height:'200px',
                              width:'200px',
                            background:box.color,
                            margin:'10px',
                            display:'inLine-Block'
                            }}>
                               <h4 style={{textDecoration:box.status?"line-through":"None"}}>{box.color}</h4> 
                                <input type="checkbox" checked={box.status} onChange={()=>{props.updateBox(id)}}/>
                                <button onClick={()=>{props.deleteBox(id)}}>Delete</button>
                                </div>
                    )
                })
            }
    </div>
  )
}

export default Display