import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { expenseApi } from "../apis/expenseApi";
import { UserContext } from "../providers/UserProvider";
import Expense from "./Expense";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const { uid } = useContext(UserContext);

  useEffect(() => {
    return expenseApi.subscribe(setExpenses, uid);
  }, [uid]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table style={{ minWidth: 300 }}>
          <TableHead>
            <TableRow>
              <TableCell width="5" />
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((expense) => (
              <Expense key={expense.id} {...expense} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Expenses;
