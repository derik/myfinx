import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  MenuItem,
  TextField,
} from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SaveIcon from "@material-ui/icons/Save";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../providers/UserProvider";
import { createExpense } from "../redux/expenses/expense.actions";
import { listCategories } from "../redux/categories/category.actions";

const AddExpenseDialog = ({ dialogOpen, handleClickCloseDialog }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const categoryReducer = useSelector((state) => state.category);
  const { categories } = categoryReducer;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  const { uid } = useContext(UserContext);

  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleValueChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setCategory(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createExpense({ name, category, value, userUid: uid }));

    setName("");
    setValue("");
    setCategory("");
    handleClickCloseDialog();
  };

  return (
    <Dialog
      open={dialogOpen}
      onClose={handleClickCloseDialog}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add Expense</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Expense name"
            value={name}
            onChange={handleNameChange}
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Category"
            select
            value={category}
            onChange={handleCategoryChange}
            margin="normal"
            variant="outlined"
            fullWidth
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Value"
            value={value}
            onChange={handleValueChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
              endAdornment: <InputAdornment position="end"> zł</InputAdornment>,
            }}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClickCloseDialog} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" startIcon={<SaveIcon />}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddExpenseDialog;
