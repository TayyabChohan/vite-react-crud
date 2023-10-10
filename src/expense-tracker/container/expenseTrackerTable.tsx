import React, { useState } from "react";
import ExpenseListm from "../components/expenseList";
import ExpenseFilter from "../components/ExpenseFilter";
import ExpenseForm from "../components/ExpenseForm";
import categories from "../../components/Categories";
const ExpenseTrackerTable = () => {
  // const [dropdownValue, setDropdownValue] = useState();
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 12, category: "garoceries" },
    { id: 2, description: "bbb", amount: 12, category: "entertainment" },
    { id: 3, description: "ccc", amount: 34, category: "entertainment" },
    { id: 4, description: "ddd", amount: 12, category: "utilities" },
    { id: 5, description: "fff", amount: 12, category: "utilities" },
  ]);
  const [selectedItems, setSelectedItems] = useState("");
  const visibleSelected = selectedItems
    ? expenses.filter((item) => item.category === selectedItems)
    : expenses;
  return (
    <>
      <div className="mt-7">
        <ExpenseForm
          categories={categories}
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mt-3">
        <ExpenseFilter
          onSelectAction={(category) => setSelectedItems(category)}
          categories={categories}
        />
      </div>
      <ExpenseListm
        expenses={visibleSelected}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
};

export default ExpenseTrackerTable;
