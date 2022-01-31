import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";

//styles
import "./TransactionDetails.css";

export default function TransactionDetails() {
  const { id } = useParams();
  const { error, document } = useDocument("transactions", id);

  if (error) {
    return <div className='error'>{error}</div>;
  }

  if (!document) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div className='transaction-details'>
      <h1>{document.payee}</h1>
    </div>
  );
}
