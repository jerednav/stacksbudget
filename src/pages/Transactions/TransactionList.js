import React from "react";

export default function TransactionList({ transactions }) {
  return (
    <div>
      {transactions.length === 0 && <p>No transactions yet.</p>}
      {transactions.map((transaction) => (
        <div key={transaction.id}>{transaction.payee}</div>
      ))}
    </div>
  );
}
