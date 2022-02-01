import { useState } from "react";

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

export default function TransactionFilter() {
  const [currentFilter, setCurrentFilter] = useState("All");

  const handleClick = (newFilter) => {
    console.log(newFilter);
    setCurrentFilter(newFilter);
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
