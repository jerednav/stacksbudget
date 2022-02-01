import { Link } from "react-router-dom";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import moment from "moment";

//styles
import "./TransactionList.css";

export default function TransactionList({ transactions }) {
  // let months = moment.monthsShort();

  return (
    <>
      {/* <div id='journal-page'>
        <h1>Care Journal</h1>
        <h4 id='progress-sub'>Log your progress</h4>
        <Tabs forceRenderTabPanel>
          <TabList>
            <Tab>2022</Tab>
            {/* <Tab>2021</Tab> */}
      {/* </TabList>
          <TabPanel>
            <Tabs forceRenderTabPanel defaultIndex={new Date().getMonth()}>
              <TabList>
                {months.map((month) => (
                  <Tab key={month}>{month}</Tab>
                ))}
              </TabList>
              <TabPanel>
                
              </TabPanel>
            </Tabs>
          </TabPanel> */}
      {/* </Tabs> */}
      {/* </div> */}
      <div className='transaction-list'>
        {transactions.map((transaction) => (
          <Link to={`/transactions/${transaction.id}`} key={transaction.id}>
            <h4>{transaction.payee}</h4>
            <p>Date: {transaction.date.toDate().toDateString()}</p>
            <p>Category: {transaction.category}</p>
            <p>Amount: {transaction.amount}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
