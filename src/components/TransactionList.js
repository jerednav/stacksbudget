import { Link } from "react-router-dom";
import "./TransactionList.css";

export default function TransactionList({ transactions }) {
  return (
    <div>
      {transactions.length === 0 && <p>No transactions yet.</p>}

      {transactions.map((transaction) => (
        <Link to={`/transactions/${transaction.id}`} key={transaction.id}>
          <h4>{transaction.payee}</h4>
          <p>Date: {transaction.date.toDate().toDateString()}</p>
          <p>Category: {transaction.category}</p>
          <p>Amount: {transaction.amount}</p>
        </Link>
      ))}
    </div>
  );
}
