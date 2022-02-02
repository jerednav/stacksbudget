import { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import TransactionList from "../../components/TransactionList";
import TransactionFilter from "./TransactionFilter";

//styles
import "./Transactions.css";

export default function Transactions() {
  const { documents, error } = useCollection("transactions");
  const [currentFilter, setCurrentFilter] = useState("All");

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  return (
    <div className='transaction-page'>
      <h2>Transactions</h2>
      {error && <p className='error'>{error}</p>}
      {documents && (
        <TransactionFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {documents && <TransactionList transactions={documents} />}
    </div>
  );
}
