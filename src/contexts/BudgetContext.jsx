import { createContext, useContext, useState } from 'react';

const BudgetContext = createContext(null);

function BudgetProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);

  const toggleBudget = () => setBudgetMode((prev) => !prev);

  const value = { budgetMode, setBudgetMode, toggleBudget };

  return (
    <>
      <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
    </>
  );
}

export { BudgetProvider };
