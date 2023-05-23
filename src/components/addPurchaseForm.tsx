import {useState} from 'react'
const AddPurchaseForm = () => {

    return(
        <div className = 'border' style = {{width: '60%'}}>
            <div className = 'flex justify-end'>
                <button className = 'text-6xl border rounded-xl justify-center p-3'>x</button>
            </div>
            <h1 className = 'text-4xl'>Add Purchase</h1>
            <form className = 'flex flex-col border justify-center align-center'>
                <div className = 'flex'>
                <label>Item:</label>
                <input className = 'border'type = 'text'></input>
                </div>
                <div className = 'flex'>
                <label>Price:</label>
                <input type = 'text' className = 'flex border'></input>
                </div>
                <div className = 'flex'>
                <label>Date:</label>
                <input className = 'border'></input>
                </div>
                <div className = 'flex'>
                <label >Category:</label>
                <input type = 'text' className = 'border'></input>
                </div>
                <div className = 'flex'>
                <button className = 'bg-blue-800 text-white p-1 rounded'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export {AddPurchaseForm}