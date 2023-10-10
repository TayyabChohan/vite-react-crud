import React from "react";

interface expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expenses: expense[];
  onDelete: (id: number) => void;
  
}
const ExpenseList = ({ expenses,onDelete }: Props) => {
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item) => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button
                  className="btn-outline-dangar"
                  onClick={() =>onDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              $
              {expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList;
