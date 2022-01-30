import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";

import "./AddTransaction.css";
import Select from "react-select";

const categories = [
  { value: "internet", label: "Internet" },
  { value: "gas", label: "Gas" },
  { value: "funmoney", label: "Fun Money" },
  { value: "subscriptions", label: "Subscriptions" },
  { value: "other", label: "Other" },
];

const accounts = [
  { value: "checking", label: "Checking" },
  { value: "savings", label: "Savings" },
  { value: "investments", label: "Investments" },
  { value: "other", label: "Other" },
];

function AddTransaction2() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [payee, setPayee] = useState("");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState([]);
  const [account, setAccount] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = (e) => {
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

    console.log(payee, date, category, amount, notes, account);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add Transaction</Button>}
    >
      <Modal.Header>Add Transaction</Modal.Header>
      <Modal.Content>
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

          <Modal.Actions>
            <Button color='grey' onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button content='Add Transaction' positive />
            {formError && <p>{formError}</p>}
          </Modal.Actions>
        </form>
      </Modal.Content>
    </Modal>
  );
}

export default AddTransaction2;
