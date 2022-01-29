import "./Home.css";

export default function Home() {
  return (
    <div className='home'>
      <div className='title'>
        <h1 className='title-name'>Stacks</h1>
      </div>
      <section>
        <div className='description'>
          <h5>Your new best budgeting friend.</h5>
          <ul>
            <li>✅ Budgeting App</li>
            <li>✅ Expense Tracker</li>
            <li>✅ Investments</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
