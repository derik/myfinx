import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../providers/UserProvider";
import { listExpenses } from "../redux/expenses/expense.actions";
import Expense from "./Expense";

const Expenses = () => {
  const { uid: userUid } = useContext(UserContext);

  const dispatch = useDispatch();

  const expense = useSelector((state) => state.expense);
  const { loading, error, expenses } = expense;

  useEffect(() => {
    dispatch(listExpenses(userUid));
  }, [dispatch, userUid]);

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <TableContainer component={Paper}>
          <Table style={{ minWidth: 300 }}>
            <TableHead>
              <TableRow>
                <TableCell width="5" />
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
      )}
    </>
  );
};

export default Expenses;
