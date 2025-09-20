import React, { useState } from 'react';

function BudgetForm() {
  const [categories, setCategories] = useState([]);
  const [newName, setNewName] = useState('');
  const [newValue, setNewValue] = useState('');

  // Create category
  const addCategory = () => {
    if (!newName || isNaN(newValue)) return;

    const newCategory = {
      id: Date.now(),
      name: newName,
      value: Number(newValue),
    };

    setCategories([...categories, newCategory]);
    setNewName('');
    setNewValue('');
  };

  // Update category
  const updateCategory = (id, field, value) => {
    const updated = categories.map(cat =>
      cat.id === id ? { ...cat, [field]: field === 'value' ? Number(value) : value } : cat
    );
    setCategories(updated);
  };

  // Delete category
  const deleteCategory = (id) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  return (
    <div>
      <h2>Category Manager</h2>

      {/* Create New Category */}
      <div>
        <input
          type="text"
          placeholder="Category name"
          value={newName}
          onChange={e => setNewName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Value"
          value={newValue}
          onChange={e => setNewValue(e.target.value)}
        />
        <button onClick={addCategory}>Add</button>
      </div>

      {/* Category List */}
      <ul>
        {categories.map(cat => (
          <li key={cat.id}>
            <input
              type="text"
              value={cat.name}
              onChange={e => updateCategory(cat.id, 'name', e.target.value)}
            />
            <input
              type="number"
              value={cat.value}
              onChange={e => updateCategory(cat.id, 'value', e.target.value)}
            />
            <button onClick={() => deleteCategory(cat.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BudgetForm;