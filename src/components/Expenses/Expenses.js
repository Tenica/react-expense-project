import React, { useState } from 'react';

import Card from '../UI/Card'
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    console.log('Expenses.js')
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  
    
    return ( <div>
      <Card className='expenses'>
    <ExpensesFilter 
    selected={filteredYear} 
    onChangeFilter={filterChangeHandler}
    />
    <ExpensesChart expenses={filteredExpenses} />
  <ExpenseList items={filteredExpenses}/>
        </Card>
      </div> );
}

export default Expenses;