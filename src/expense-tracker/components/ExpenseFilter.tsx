interface Props {
  onSelectAction: (category: string) => void;
  categories: string[];
}
const ExpenseFilter = ({ onSelectAction, categories }: Props) => {
  return (
    <>
      <select
        className="form-select"
        onChange={(e) => onSelectAction(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </>
  );
};

export default ExpenseFilter;
