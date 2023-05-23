import {RegisterPage} from './registerPage'
import {SpendingTable} from '../components/spendingTable'
import { AddPurchaseForm } from '../components/addPurchaseForm'
import {useState} from 'react'
const Homepage = () => {
    let [showAddSpendingForm, setShowAddSpendingForm] = useState(false)
    let [spending, setSpending] = useState([
        {
            "Category": "Food",
            "Amount": 400
        },
        {
            "Category":"Bills",
            "Amount": 300
        },
        {
            "Category":"Rent",
            "Amount": 1200,
        },
        {
            "Category":"Travel",
            "Amount": 200
        }
        
    ])
    return(
        <section>
            {showAddSpendingForm && <AddPurchaseForm/>}
            
        <div id = 'spendingOverview'>
            <h1>Spending charts go here</h1>
        </div>
        <div className = 'flex justify-evenly'>
        <h1 className = 'text-6xl'>Spending</h1>
        <button className = 'border rounded bg-blue-300 p-3 text-white' onClick = {() => {setShowAddSpendingForm(!showAddSpendingForm)}}>Add Purchase</button>
        </div>
        <SpendingTable spending = {spending}/>
        </section> 
    )
}

export {Homepage}