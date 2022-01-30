import { useCollection } from "../../hooks/useCollection";

//styles
import "./Transactions.css";
import AddTransaction from "./AddTransaction";

export default function Transactions() {
  const { documents, error } = useCollection("transactions");

  return (
    <div className='transaction-details'>
      <h2>Transactions</h2>
      <AddTransaction />
      {error && <p className='error'>{error}</p>}
      {documents &&
        documents.map((transaction) => (
          <p key={transaction.id}>{transaction.payee}</p>
        ))}
    </div>
  );
}
