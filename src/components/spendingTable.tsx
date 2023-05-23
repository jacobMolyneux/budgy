import {useState} from 'react'

const SpendingTable = (props:any) => {
    let [displayMore, setDisplayMore] = useState(false)  

    return(
        <div>
            {props.spending.map((item:any) => 
                <div className = 'border rounded p-3 flex justify-between mx-3'>
                    <h1 className = 'text-4xl'>{item.Category}</h1>
                    <h3>${item.Amount}</h3>
                    <button onClick = {() => {setDisplayMore(true)}} className ='border bg-blue-800 p-3 text-white rounded-md'>See More</button>
                </div>

            )}
        </div>
    )
}
export {SpendingTable}