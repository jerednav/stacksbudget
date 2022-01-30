import React, { useState } from "react";
import Select from "react-select";
import { timestamp } from "../../firebase/config";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";

import "./AddTransaction.css";

const categories = [
  { value: "internet", label: "Internet" },
  { value: "gas", label: "Gas" },
  { value: "funmoney", label: "Fun Money" },
  { value: "subscriptions", label: "Subscriptions" },
  { value: "groceries", label: "Groceries" },
  { value: "other", label: "Other" },
];

const accounts = [
  { value: "checking", label: "Checking" },
  { value: "savings", label: "Savings" },
  { value: "investments", label: "Investments" },
  { value: "other", label: "Other" },
];

function AddTransaction2() {
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
      notes,
      account: account.value,
    };

    await addDocument(transaction);
    if (!response.error) {
      navigate("/budget");
    }
  };

  return (
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
        <Select onChange={(option) => setAccount(option)} options={accounts} />
      </label>

      <button>Add Transaction</button>
      {formError && <p>{formError}</p>}
    </form>
  );
}

export default AddTransaction2;
