const categoryList = [
  "All",
  "Rent",
  "Dining Out",
  "Groceries",
  "Internet",
  "Gas",
  "Fun Money",
  "Subscriptions",
  "Other",
];

export default function TransactionFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <div className='transaction-filter'>
      <nav>
        {categoryList.map((cat) => (
          <button
            key={cat}
            onClick={() => handleClick(cat)}
            className={currentFilter === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </nav>
    </div>
  );
}
