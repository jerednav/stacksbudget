import React, { useState } from 'react';

export default function AddTransaction() {
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [payee, setPayee] = useState("");
    const [amount, setAmount] = useState("");
    const [notes, setNotes] = useState([]);
    const [tags, setTags] = useState([]);
    const [account, setAccount] = useState("");
    const [showModal, setShowModal] = useState(false)
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(payee, date, category, amount, notes, tags, account);
      setShowModal(false)
    };
  

  return <div className='modal'>
  <button id='modal-btn' onClick={() => setShowModal(true)}>
      Add Transaction 
    </button>


{showModal && 
<div className="modal-content">
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

    <span>Category:</span>
    <label>
      <input
        required
        type='text'
        onChange={(e) => setCategory(e.target.value)}
        value={category}
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
      <span>Tags:</span>
      <input
        type='text'
        onChange={(e) => setTags(e.target.value)}
        value={tags}
      />
    </label>
    <label>
      <span>Account:</span>
      <input
        required
        type='text'
        onChange={(e) => setAccount(e.target.value)}
        value={account}
      />
    </label>
    <button>Add</button>
  </form> 
  </div>}
</div>
}
