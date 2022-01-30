import React, { useState } from 'react';
import './AddTransaction.css'
import Select from 'react-select'

const categories = [

   { value: 'internet', label: 'Internet'},
   { value: 'gas', label: 'Gas'},
   { value: 'funmoney', label: 'Fun Money'},
   { value: 'subscriptions', label: 'Subscriptions'},
   { value: 'other', label: 'Other'}
]

const accounts = [
    { value: 'checking', label: 'Checking'},
    { value: 'savings', label: 'Savings'},
    { value: 'investments', label: 'Investments'},
    { value: 'other', label: 'Other'},
]

export default function AddTransaction() {
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [payee, setPayee] = useState("");
    const [amount, setAmount] = useState("");
    const [notes, setNotes] = useState([])
    const [account, setAccount] = useState("");
    const [showModal, setShowModal] = useState(false)
    const [formError, setFormError ] = useState(null)

  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormError(null)
    
        if (!category) {
            setFormError('Please select a category')
            return
        }
        if (!account) {
            setFormError('Please select at least 1 account')
            return
        }

      console.log(payee, date, category, amount, notes, account);
      setShowModal(false)
    };
  

  return <>
  <div className='modal'>
  <button id='modal-btn' onClick={() => setShowModal(true)}>
      Add Transaction 
    </button>




{showModal &&
<div className=''> 
  <form className='trans-form' onSubmit={handleSubmit} onClose={() => setShowModal(false)}>
    <label>
      <span>Payee:</span>
      <input
        required
        type='text'
        onChange={(e) => setPayee(e.target.value)}
        value={payee}
      />
    </label>
    <label>
      <span>Date:</span>
      <input
        required
        type='date'
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />
    </label>

    
    <label>
    <span>Category:</span>
      <Select 
        onChange={(option) => setCategory(option)}
        options={categories}
      />
    </label>
    <label>
      <span>Amount:</span>
      <input
        required
        type='number'
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
    </label>
    <label>
      <span>Notes:</span>
      <input
        type='text'
        onChange={(e) => setNotes(e.target.value)}
        value={notes}
      />
    </label>
    <label>
      <span>From Account:</span>
      <Select 
        onChange={(option) => setAccount(option)}
        options={accounts}
      />
    </label>
    <div className='buttons'>
    <button onClick={()=> setShowModal(false)}>Cancel</button>
    <button className="add-btn">Add</button>
    {formError && <p className="error">{formError}</p>}
    </div>
  </form> 
  </div>
  }
  </div>
</>
}
