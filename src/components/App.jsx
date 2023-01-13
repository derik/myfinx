import { Box, CircularProgress, Container, Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import AddExpense from "./AddExpense";
import Expenses from "./Expenses";
import Header from "./Header";
import SignIn from "./SignIn";

const App = () => {
  const authInfo = useContext(UserContext);

  const homePage = (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs>
        <AddExpense />
        <Expenses />
      </Grid>
    </Grid>
  );

  const loader = (
    <Box mt={5} display="flex" justifyContent="center">
      <CircularProgress />
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="sm">
        {authInfo.loading ? loader : authInfo.user ? homePage : <SignIn />}
      </Container>
    </>
  );
};

export default App;
