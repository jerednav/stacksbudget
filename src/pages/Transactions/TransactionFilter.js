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

export default function TransactionFilter({ filter, changeFilter }) {
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
            className={filter === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </nav>
    </div>
  );
}
