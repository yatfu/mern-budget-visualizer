import ExpensesForm from '../components/ExpensesForm';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

const Expenses = () => {
  const [categories, setCategories] = useState([]);

  return (
    <div>
      <h2>Expenses Dashboard</h2>
      <ExpensesChart 
        labels={['Rent', 'Food', 'Utilities', 'Entertainment']} 
        values={[
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100)
          ]}
      />
      <ExpensesForm categories={categories} setCategories={setCategories} />
    </div>
  );
};

export default Expenses;