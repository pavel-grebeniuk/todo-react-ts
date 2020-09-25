import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuLink: {
      marginRight: theme.spacing(2),
      color: "#ffffff",
      textTransform: "uppercase",
      textDecoration: "none"
    },
    activeLink: {
      textDecoration: "underline"
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const NavBar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Todo List App
          </Typography>
          <NavLink to='/'
                   exact
                   className={classes.menuLink}
                   activeClassName={classes.activeLink}
          >
            Todo list
          </NavLink>
          <NavLink to='/about'
                   className={classes.menuLink}
                   activeClassName={classes.activeLink}
          >
            About
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};
