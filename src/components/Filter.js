import React from "react";

const Filter = ({ setFilter, currentFilter }) => {
  return (
    <div className="todo-btns">
      <button onClick={() => setFilter("all")} className={currentFilter == 'all' ? 'active' : ''}>All</button>
      <button onClick={() => setFilter("completed")} className={currentFilter == 'completed' ? 'active' : ''}>Completed</button>
      <button onClick={() => setFilter("pending")} className={currentFilter == 'pending' ? 'active' : ''}>Pending</button>
    </div>
  );
};

export default Filter;
