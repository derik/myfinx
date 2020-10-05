import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import AddCircle from "@material-ui/icons/AddCircle";
import AddExpenseDialog from "./AddExpenseDialog";

const useStyles = makeStyles((theme) => ({
  addButton: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    display: "block",
    margin: "auto",
  },
}));

const AddExpense = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const classes = useStyles();

  const handleClickOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleClickCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <IconButton
        color="primary"
        onClick={handleClickOpenDialog}
        className={classes.addButton}
      >
        <AddCircle fontSize="large" />
      </IconButton>
      <AddExpenseDialog
        dialogOpen={dialogOpen}
        handleClickCloseDialog={handleClickCloseDialog}
      />
    </>
  );
};

export default AddExpense;
