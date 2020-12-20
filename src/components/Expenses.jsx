import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { expenseApi } from '../apis/expenseApi';
import { UserContext } from '../providers/UserProvider';
import Expense from './Expense';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const { uid: userUid } = useContext(UserContext);

  useEffect(() => {
    return expenseApi.subscribe(setExpenses, userUid);
    //expenseApi.findAll(userUid).then(setExpenses);
  }, [userUid]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table style={{ minWidth: 300 }}>
          <TableHead>
            <TableRow>
              <TableCell width='5' />
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((expense) => (
              <Expense key={expense.id} {...expense} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Expenses;
