import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";

export default function TransactionSummary({ transaction }) {
  const { deleteDocument } = useFirestore("transactions");
  const navigate = useNavigate();

  const handleDelete = (e) => {
    deleteDocument(transaction.id);
    navigate("/transactions");
  };

  return (
    <div>
      <div className='transaction-summary'>
        <h2 className='page-title'>{transaction.payee}</h2>
        <h2 className='trans-date'>
          Date : {transaction.date.toDate().toDateString()}
        </h2>
        <h2 className='trans-category'>Category: {transaction.category}</h2>
        <h2 className='trans-amount'>Amount: ${transaction.amount}</h2>
        <h2 className='trans-account'>Account: {transaction.account}</h2>
        <button onClick={handleDelete}>Delete Transaction</button>
      </div>
    </div>
  );
}
