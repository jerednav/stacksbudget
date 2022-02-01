import React, { useState } from "react";
import Select from "react-select";
import { timestamp } from "../../firebase/config";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";

import "./AddTransaction.css";

const categories = [
  { value: "Rent", label: "Rent" },
  { value: "Dining Out", label: "Dining Out" },
  { value: "Groceries", label: "Groceries" },
  { value: "Internet", label: "Internet" },
  { value: "Gas", label: "Gas" },
  { value: "Fun Money", label: "Fun Money" },
  { value: "Subscriptions", label: "Subscriptions" },
  { value: "Other", label: "Other" },
];

const accounts = [
  { value: "Checking", label: "Checking" },
  { value: "Savings", label: "Savings" },
  { value: "Investments", label: "Investments" },
  { value: "Other", label: "Other" },
];

function AddTransaction() {
  const { addDocument, response } = useFirestore("transactions");
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [payee, setPayee] = useState("");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState([]);
  const [account, setAccount] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError("Please select a category");
      return;
    }
    if (!account) {
      setFormError("Please select at least 1 account");
      return;
    }

    const transaction = {
      payee,
      date: timestamp.fromDate(new Date(date)),
      category: category.value,
      amount,
      account: account.value,
      dateCreated: timestamp.now(),
    };

    await addDocument(transaction);
    if (!response.error) {
      navigate("/budget");
    }
  };

  return (
    <div className='add-wrapper'>
      <div className='form-title'>
        <h1> Add a Transaction </h1>
      </div>

      <form className='trans-form' onSubmit={handleSubmit}>
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

        <button>Add Transaction</button>
        {formError && <p>{formError}</p>}
      </form>
    </div>
  );
}

export default AddTransaction;
