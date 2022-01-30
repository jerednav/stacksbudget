import { useCollection } from "../../hooks/useCollection";

//styles
import "./Transactions.css";

export default function Transactions() {
  const { documents, error } = useCollection("transactions");

  return (
    <div id='transactions-page'>
      <h1>Transactions</h1>
      <h4 id='progress-sub'>Log your transactions</h4>

      <Tabs forceRenderTabPanel>
        <TabList>
          <Tab>2022</Tab>
          <Tab>2021</Tab>
        </TabList>
        <TabPanel>
          <Tabs forceRenderTabPanel defaultIndex={new Date().getMonth()}>
            <TabList>
              {months.map((month) => (
                <Tab key={month}>{month}</Tab>
              ))}
            </TabList>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <div id='transactions-list'>
            {documents.map(
              (doc) =>
                doc.created_at.includes("January") &&
                doc.created_at.includes("2022") && (
                  <div
                    key={doc.id}
                    className='entry-info'
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/transactions/${doc.id}`);
                    }}
                  >
                    <h4>{doc.created_at}</h4>
                    {doc.payee}
                  </div>
                )
            )}
          </div>
        </TabPanel>
        {/* <TabPanel>
          <Tabs forceRenderTabPanel defaultIndex={new Date().getMonth()}>
            <TabList>
              {months.map((month) => (
                <Tab key={month}>{month}</Tab>
              ))}
            </TabList>
            <TabPanel>
              <div id='entries-list'>
                {Object.values(entries).map(
                  (entry) =>
                    entry.created_at.includes("Jan") &&
                    entry.created_at.includes("2022") && (
                      <div
                        key={entry.id}
                        className='entry-info'
                        onClick={(e) => {
                          e.preventDefault();
                          history.push(`/journal/${entry.id}`);
                        }}
                      >
                        <h4>{entry.created_at}</h4>
                        {entry.rating && <p>Skin rating: {entry.rating}</p>}
                      </div>
                    )
                )}
              </div>
            </TabPanel> */}
        {/* </Tabs>
        </TabPanel> */}
      </Tabs>
    </div>
  );
}
