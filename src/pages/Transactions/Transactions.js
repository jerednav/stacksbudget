import { useCollection } from "../../hooks/useCollection";
import TransactionList from "../../components/TransactionList";

//styles
import "./Transactions.css";

export default function Transactions() {
  const { documents, error } = useCollection("transactions");

  return (
    <div className='transaction-page'>
      <h2>Transactions</h2>
      {error && <p className='error'>{error}</p>}
      {documents && <TransactionList transactions={documents} />}
    </div>
  );
}
