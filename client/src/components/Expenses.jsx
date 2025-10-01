import ExpensesForm from '../components/ExpensesForm';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

const Expenses = () => {
  const [categories, setCategories] = useState([
    { name: 'Housing/Rent', value: '3000' },
    { name: 'Utilities', value: '500'},
    { name: 'Food', value: '1000'},
    { name: 'Other', value: '500'}
  ]);

  return (
    <div>
      <h2>Expenses Dashboard</h2>
      <ExpensesChart 
        labels={categories.map(category => category.name)} 
        values={categories.map(category => parseFloat(category.value))}
      />
      <ExpensesForm categories={categories} setCategories={setCategories} />
    </div>
  );
};

export default Expenses;