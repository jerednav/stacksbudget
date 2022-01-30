import React from "react";

import { useCollection } from "../../hooks/useCollection";

export default function TransactionTable() {
  const { documents, error } = useCollection("transactions");

  return (
    <div className='transactions'>
      <div className='transaction-title'>
        <h1>Transactions</h1>
      </div>

      <div className='transactions-list'>
        {error && <p className='error'>{error}</p>}
        {documents && documents.map((doc) => <p key={doc.id}>{doc.payee}</p>)}
      </div>
    </div>
  );
}
