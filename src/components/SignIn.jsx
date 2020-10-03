import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithGoogle } from "../apis/firebase";
import SvgIcon from "@material-ui/core/SvgIcon";
import {
  Button,
  makeStyles,
  TextField,
  Avatar,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const GoogleIcon = (props) => {
  return (
    <SvgIcon width={22} height={22} viewBox="0 0 48 48" {...props}>
      <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
    </SvgIcon>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    const { value } = e.target;
    setEmail(value);
  }

  function handlePasswordChange(e) {
    const { value } = e.target;
    setPassword(value);
  }

  function signIn(e) {
    e.preventDefault();

    signInWithEmailAndPassword(email, password).catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
  }

  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form onSubmit={signIn} className={classes.form} noValidate>
        <TextField
          value={email}
          onChange={handleEmailChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          value={password}
          onChange={handlePasswordChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
        <Button
          type="button"
          fullWidth
          variant="contained"
          startIcon={<GoogleIcon />}
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
