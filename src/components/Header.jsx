import {
  AppBar,
  Avatar,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { auth } from "../apis/firebase.js";
import { UserContext } from "../providers/UserProvider.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const user = useContext(UserContext);

  // Context Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuId = "primary-search-account-menu";
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    setAnchorEl(null);
    auth.signOut();
  };

  const renderContextMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleSignOut}>Logout</MenuItem>
    </Menu>
  );

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            MyFinX
          </Typography>
          {user ? (
            <>
              <MenuItem color="inherit" onClick={handleProfileMenuOpen}>
                <Avatar alt={user.displayName} src={user.photoURL} />
              </MenuItem>
            </>
          ) : null}
        </Toolbar>
      </AppBar>
      {renderContextMenu}
    </div>
  );
};

export default Header;
