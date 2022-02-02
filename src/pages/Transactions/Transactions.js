import { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import TransactionList from "../../components/TransactionList";
import TransactionFilter from "./TransactionFilter";

//styles
import "./Transactions.css";

export default function Transactions() {
  const { documents, error } = useCollection("transactions");
  const [filter, setFilter] = useState("All");

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const transactions = documents
    ? documents.filter((document) => {
        switch (filter) {
          case "All":
            return true;
          case "Rent":
          case "Dining Out":
          case "Groceries":
          case "Internet":
          case "Gas":
          case "Fun Money":
          case "Subscriptions":
          case "Other":
            console.log(document.category, filter);
            return document.category === filter;
          default:
            return true;
        }
      })
    : null;

  return (
    <div className='transaction-page'>
      <h2>Transactions</h2>
      {error && <p className='error'>{error}</p>}
      {documents && <TransactionFilter changeFilter={changeFilter} />}
      {documents && <TransactionList transactions={transactions} />}
    </div>
  );
}
