import { useCollection } from "../../hooks/useCollection";
import TransactionList from "../../components/TransactionList";
import AddTransaction from "./AddTransaction";

//styles
import "./Transactions.css";

export default function Transactions() {
  const { documents, error } = useCollection("transactions");

  return (
    <div className='transaction-details'>
      <h2>Transactions</h2>
      {error && <p className='error'>{error}</p>}
      <div className='transaction-list'>
        {documents && <TransactionList transactions={documents} />}
      </div>
    </div>
  );
}
