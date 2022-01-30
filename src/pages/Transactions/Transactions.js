import AddTransaction from "./AddTransaction";

import { useCollection } from "../../hooks/useCollection";

//styles
import "./Transactions.css";
import { Table } from "semantic-ui-react";

export default function Transactions() {
  const { documents, error } = useCollection("transactions");

  return (
    <div className='transactions'>
      <div className='transaction-title'>
        <h1>Transactions</h1>
      </div>
      <AddTransaction />
      <div className='transactions-list'>
        {error && <p className='error'>{error}</p>}
        {documents && (
          <>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Payee</Table.HeaderCell>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Category</Table.HeaderCell>
                  <Table.HeaderCell>Amount</Table.HeaderCell>
                  <Table.HeaderCell>Notes</Table.HeaderCell>
                  <Table.HeaderCell>From Account</Table.HeaderCell>
                </Table.Row>
                <Table.Body>
                  <Table.Row>
                    {documents.map((doc) => (
                      <>
                        <Table.Cell>{doc.transaction}</Table.Cell>
                      </>
                    ))}
                  </Table.Row>
                </Table.Body>
              </Table.Header>
            </Table>
          </>
        )}
      </div>
    </div>
  );
}
