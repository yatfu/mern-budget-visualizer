import React, { useState } from 'react';

const ExpensesForm = () => {
  const [categories, setCategories] = useState([
    { name: '', value: '' }
  ]);

  const handleChange = (index, field, value) => {
    const newCategories = [...categories];
    newCategories[index][field] = value;
    setCategories(newCategories);
  };

  const addCategory = () => {
    setCategories([...categories, { name: '', value: 0 }]);
  };

  const deleteCategory = (indexToRemove) => {
    const newCategories = categories.filter((element, index, array) => index !== indexToRemove);
    setCategories(newCategories);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted expenses:', categories);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Expenses</h2>

      {categories.map((cat, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Category Name"
            value={cat.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Value"
            value={cat.value}
            onChange={(e) => handleChange(index, 'value', e.target.value)}
            required
          />
          <button type="button" onClick={() => {deleteCategory(index)}}>X</button>
        </div>
      ))}
{/* Delete function needs arrow function to pass parameters, addcategory does not, can pass function itself */}
      <button type="button" onClick={addCategory}>
        + Add Category
      </button>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpensesForm;
