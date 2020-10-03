import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import React, { useContext, useState } from "react";
import { expenseApi } from "../apis/expenseApi";
import { UserContext } from "../providers/UserProvider";

const AddExpenseDialog = ({ dialogOpen, handleClickCloseDialog }) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const { uid } = useContext(UserContext);

  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleValueChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    expenseApi
      .add({ name, value, userUid: uid })
      .then(() => console.log("expense added!"));
    setName("");
    setValue("");
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
          <CurrencyTextField
            label="Value"
            value={value}
            onChange={handleValueChange}
            variant="outlined"
            currencySymbol="$"
            outputFormat="string"
            decimalCharacter="."
            digitGroupSeparator=","
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
