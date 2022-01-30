import { useCollection } from "../../hooks/useCollection";
import TransactionList from "./TransactionList";

//styles
import "./Transactions.css";

export default function Transactions() {
  const { documents, error } = useCollection("transactions");

  return (
    <div>
      <h2 className='page-title'>Transactions</h2>
      {error && <p className='error'>{error}</p>}
      {documents && <TransactionList transactions={documents} />}
    </div>
  );
}
