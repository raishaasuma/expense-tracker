import './ExpenseItem.css';

const ExpenseItem = () => {
  return (
    <div className='expense-item'>
      <div>January 18th, 2022</div>
      <div className='expense-item__description'>
          <h2>Car Insurance</h2>
          <div className='expense-item__price'>$128.00</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
